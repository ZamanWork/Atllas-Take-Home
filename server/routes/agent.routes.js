const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const agentSchema = require('../validators/agent.validator')
const schemaValidator = require('../utils');
const AgentCtrl = require('../controllers/agents.controller');

router.post('/create-agent', schemaValidator(agentSchema), asyncHandler(AgentCtrl.addAgent));
router.get('/agents', asyncHandler(AgentCtrl.listAgents));

module.exports = router;