const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const validateAgent = require('../utils');
const {agentSchema, updateAgentSchema} = require("../validators/agent.validator");
const AgentCtrl = require('../controllers/agents.controller');

router.post('/create-agent', validateAgent(agentSchema), asyncHandler(AgentCtrl.addAgent));
router.get('/agents', asyncHandler(AgentCtrl.listAgents));
router.get('/agent-details/:id', asyncHandler(AgentCtrl.getAgent));
router.patch('/update-agent/:id', validateAgent(updateAgentSchema), asyncHandler(AgentCtrl.updateAgent))
router.delete('/delete-agent/:id', asyncHandler(AgentCtrl.deleteAgent))

module.exports = router;