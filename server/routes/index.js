const express = require('express');
const router = express.Router();
const agentRoutes = require('./agent.routes')

router.use('/', agentRoutes);

module.exports = router;