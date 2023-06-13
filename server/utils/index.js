module.exports = (schema) => {
  return (req,res, next, schema) => {
    const { error, value } = schema.validate(req.body);
    console.log("hereee", req.body, error, value)
    if (error) {
      res.send(error)
    } else next();
  }
} 