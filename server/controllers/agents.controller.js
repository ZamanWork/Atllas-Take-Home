const { Agent } = require('../model');

async function addAgent(req, res) {
  try {
    const newAgent = req.body;
    const data = await Agent.create(newAgent);
    res.send({message: "Successfully created an agent", agent: data});
  } catch (error) {
    res.send({message: error.message});
  }
}

async function listAgents(req, res) {
  const agents = await Agent.findAll();
  return res.json(agents);
}

module.exports = {
  addAgent,
  listAgents
};