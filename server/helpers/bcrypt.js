const bcrypt = require("bcrypt");
const saltRound = +process.env.SALT_ROUND || 5;

const encryptPwd = (data) => {
  return bcrypt.hashSync(toString(data), saltRound);
};

const decryptPwd = (data, hashPwd) => {
  return bcrypt.compareSync(toString(data), hashPwd);
};

module.exports = {
  encryptPwd,
  decryptPwd,
};
