const { Agent } = require('../models/agent');
const Review = require('../models/review');
const { Op } = require('sequelize');

async function addAgent(req, res) {
  const newAgent = req.validatedData;
  const data = await Agent.create(newAgent);
  res.send({message: "Successfully created an agent", agent: data});
}

async function listAgents(req, res) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  
  const agents = await Agent.findAll({
    include: Review,
    offset,
    limit,
  });
  const totalPageCount = Math.ceil(await Agent.count()/limit);
  return res.status(200).send({
    agents,
    page,
    limit,
    totalPageCount,
  });
}

async function getAgent(req, res) {
  const searchQuery = req.query.search;
  try {
    const agents = await Agent.findAll({
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
    if (agents) {
      res.status(200).send(agents);
    } else {
      res.status(404).send({message: "Agent not found"});
    }
  } catch (error) {
    res.status(500).send({message: error.message});
  }
}

async function updateAgent(req, res) {
  const newAgent = req.body;
  const agentId = req.params.id;
  try {
    const [affectedRows] = await Agent.update(newAgent, {
      where: { id: agentId },
    });

    if (affectedRows > 0) {
      res.status(200).send({message: "Agent Updated Successfully"});
    } else {
      res.status(404).send({message: "Agent not found"});
    }
  } catch (error) {
    res.status(500).send({message: error.message});
  }
}

async function deleteAgent(req, res) {
  const agentId = req.params.id;
  try {
    const deletedAgent = await Agent.destroy({
      where: { id: agentId },
    });
    if (deletedAgent >  0) {
      res.status(200).send({message: "Agent Deleted Successfully"});
    } else {
      res.status(404).send({message: "Agent not found"});
    }
  } catch (error) {
    res.status(500).send({message: error.message});
  }
}


module.exports = {
  addAgent,
  listAgents,
  getAgent,
  updateAgent,
  deleteAgent
};
