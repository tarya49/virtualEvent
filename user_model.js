//User->name, country, password, 
class User{
    constructor(name,country,password){
       this.name = name;
       this.country = country;
       this.password = password;
    }
}

var userList = [];

function registerUser(name, country, password){
    var newUser = User(name, country, password);
    userList.push(newUser);
}

function loginUser(name, password){
    var userIndex = userList.findIndex(user=>user.name=name);
    if(userIndex==-1){
        return "user not found";
    }
    if(userList[userIndex].password==password){
        return "successfully login in"
    }
    else{
        return "Wrong password";
    }
}

export const registerUser = registerUser;
export const loginUser = loginUser;