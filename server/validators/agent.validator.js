const Joi = require('joi')

const agentSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  photoUrl: Joi.string(),
  agentLicense: Joi.string().required(),
  address: Joi.string().required(),
  practiceAreas: Joi.string(),
  aboutMe: Joi.string().min(1).max(255),
})

module.exports = agentSchema;