module.exports.getAllOrders = async (req, res) => {
  res.status(200).json({
    login: 'from ctrl'
  });
};

module.exports.createOrder = async (req, res) => {
  res.status(200).json({
    reg: 'from reg'
  });
};
