const jwt = require('jsonwebtoken');

exports.generateToken = (req, res) => {
    const token = jwt.sign({ user: 'exampleUser' }, 'yourSecretKey', { expiresIn: '1h' });
    res.json({ token });
};

exports.postResponse = (req, res) => {
    res.send('I am post body');
};
