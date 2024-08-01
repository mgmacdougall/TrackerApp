const Logger = (req, res, next) => {
  if (req.body) {
    console.log(req.body);
  }
  if (req.query) {
    console.log(req.query);
  }
  next();
};

export default Logger;
