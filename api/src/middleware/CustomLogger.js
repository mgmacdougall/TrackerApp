const Logger = (req, res, next) => {
  console.log(req.body);
  next();
};

export default Logger;
