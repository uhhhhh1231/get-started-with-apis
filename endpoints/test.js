

const test = async (req, res) => {
    res.status(200).json({status: 'Hello World!'});
};

module.exports = test;