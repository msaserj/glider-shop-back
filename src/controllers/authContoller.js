module.exports.login = async (req, res) => {
  try {
    res.status(200).json({
      login: {
        email: req.body.email,
        password: req.body.password
      }
    });
  } catch (e) {}
};

module.exports.registr = async (req, res) => {
  res.status(200).json({
    reg: 'from reg'
  });
};
