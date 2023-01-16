const jwt = require('jsonwebtoken');
const secretCode = process.env.SECRET_CODE || 'asdf'

const tokenGenerator = (data) => {
    const {id, name, address} = data
    return jwt.sign({
        id, name, address
    }, secretCode)
    
}

const tokenVerifier = (data) => {
    return jwt.verify(data, secretCode)
}

module.exports = {
    tokenGenerator, tokenVerifier
}
