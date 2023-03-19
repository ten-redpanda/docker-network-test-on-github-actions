module.exports = (req, res, next) => {
  if (req.method === "PUT") {
      req.method = "PATCH";
  }
  next();
}
