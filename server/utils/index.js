const agentSchema = require("../validators/agent.validator")

const validateAgent = (req, res, next) => {
  const { error, value } = agentSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  req.validatedData = value;
  next();
};

module.exports = validateAgent