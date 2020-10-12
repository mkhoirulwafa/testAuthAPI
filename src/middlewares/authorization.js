module.exports = {
  authorization: (req, res, next) => {
    const { role } = req.decoded;

    if (role === "admin") next();
    else res.send({ status: 403, message: "Unauthorized" });
  },
};