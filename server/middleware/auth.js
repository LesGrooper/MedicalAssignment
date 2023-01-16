const { tokenVerifier } = require('../helpers/jsonweboken');

const authentication = (req, resp, next) => {
    console.log("middleware masuk");
  
    const access_token = req.headers.access_token;
  
    if (access_token) {
      console.log("token found!");
  
      try {
          let verifyToken = tokenVerifier(access_token)
          req.userData = verifyToken;
      } catch (error) {
       resp.status(401).json({
          messsage: `access token not found!`
       })
      }
  
    } else {
      resp.status(404).json({
        messsage: `Access token not found!`,
      });
    }
  
    next();
  };

  module.exports = {
    authentication
  }

