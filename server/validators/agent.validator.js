const Joi = require('joi')

const agentSchema = Joi.object({
  firstName: Joi.string().strict().required(),
  lastName: Joi.string().strict().required(),
  photoUrl: Joi.string().strict(),
  agentLicense: Joi.string().required(),
  address: Joi.string().strict().required(),
  practiceAreas: Joi.string(),
  aboutMe: Joi.string().strict().min(1).max(255),
})

module.exports = agentSchema;