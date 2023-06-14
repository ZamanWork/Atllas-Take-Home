const { Agent } = require('../models/agent');
const agentService = require('../DAO/agents.dao')

async function addAgent(req, res) {
  const newAgent = req.validatedData;

  const data = await agentService.createAgent(newAgent);

  res.send({message: "Successfully created an agent", agent: data});
}

async function listAgents(req, res) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  
  const agents = await agentService.getAllAgents(offset, limit); 

  const totalPageCount = Math.ceil(await Agent.count()/limit);
  return res.status(200).send({
    agents,
    page,
    limit,
    totalPageCount,
  });
}

async function searchAgents(req, res) {
  const searchQuery = req.query.search;
  try {
    const agents = await agentService.findAgents(searchQuery); 

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
    const [affectedRows] = await agentService.editAgent(newAgent, agentId);

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
    const deletedAgent = await agentService.destroyAgent(agentId);
    
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
  searchAgents,
  updateAgent,
  deleteAgent
};
