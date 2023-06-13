const { Agent } = require('../model');

async function addAgent(req, res) {
  const newAgent = req.validatedData;
  const data = await Agent.create(newAgent);
  res.send({message: "Successfully created an agent", agent: data});
}

async function listAgents(req, res) {
  const agents = await Agent.findAll();
  return res.json(agents);
}

module.exports = {
  addAgent,
  listAgents
};