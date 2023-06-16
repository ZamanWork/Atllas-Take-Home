const { Agent } = require("../models/agent");
const Review = require("../models/review");
const { Op } = require('sequelize');

function createAgent(agentObj, practices) {
  return Agent.create({...agentObj, practiceAreas: practices})
}

function getAllAgents(offset, limit) {
  return Agent.findAll({
    include: Review,
    offset: offset,
    limit: limit,
  });
}

function findAgents(searchQuery) {
  return Agent.findAll({
    where: {
      [Op.or]: [
        {
          firstName: {
            [Op.like]: `%${searchQuery}%`,
          },
        },
        {
          lastName: {
            [Op.like]: `%${searchQuery}%`,
          },
        },
        {
          agentLicense: {
            [Op.like]: `%${searchQuery}%`,
          },
        }
      ],
    },
  });
}

module.exports = {
  createAgent,
  getAllAgents,
  findAgents,
}