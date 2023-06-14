const Joi = require('joi')

const agentSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  photoUrl: Joi.string(),
  agentLicence: Joi.string().required(),
  address: Joi.string().required(),
  practiceAreas: Joi.string(),
  aboutMe: Joi.string().min(1).max(255),
})

const updateAgentSchema = Joi.object({
  firstName: Joi.string().not().empty(),
  lastName: Joi.string().not().empty(),
  photoUrl: Joi.string(),
  agentLicence: Joi.string().not().empty(),
  address: Joi.string().not().empty(),
  practiceAreas: Joi.string(),
  aboutMe: Joi.string().min(1).max(255),
})

module.exports = {agentSchema, updateAgentSchema};
