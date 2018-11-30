function AuthController (){
  isAuthorized = (roles,neededRole)=>{
    return roles.indexOf(neededRole) >=0;
  }
  isAuthorizedAsync = (roles,neededRole, cb)=>{
    setTimeout(()=>{
      cb(roles.indexOf(neededRole) >=0)
    }, 3000);
  }
  return {isAuthorized,isAuthorizedAsync};
}

module.exports = AuthController();
