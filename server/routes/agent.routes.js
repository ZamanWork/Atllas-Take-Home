const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const validateAgent = require('../utils');
const AgentCtrl = require('../controllers/agents.controller');

router.post('/create-agent', validateAgent, asyncHandler(AgentCtrl.addAgent));
router.get('/agents', asyncHandler(AgentCtrl.listAgents));

module.exports = router;