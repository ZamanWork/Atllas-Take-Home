const { Agent } = require("../models/agent");
const Review = require("../models/review");
const { Op } = require('sequelize');

function createAgent(agentObj) {
  return Agent.create(agentObj)
}

function getAllAgents(offset, limit) {
  return Agent.findAll({
    include: Review,
    offset,
    limit,
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