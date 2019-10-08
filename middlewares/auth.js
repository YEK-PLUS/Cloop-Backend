const hash = require('pbkdf2-password')();
const _ = require('lodash');
module.exports = (req) => {
  const {username, password} = req.body || {};
  // TODO: create database and update this lines
  const users = {
    YEK:{
      username : 'YEK',
      password: 'password'
    }
  };
  if(_.has(users,username) && users[username].password === password){
      req.session.regenerate(()=>{
        req.session.user = users[username];
      });
      return true;
  }
  else{
    return false;
  }
}
