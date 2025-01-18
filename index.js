class User {

    message;
    username;
    constructor(){
        this.message = 'Hello World';
        console.log(this.message);
    }

    setUserName(name){
        this.username = name;
    }

    getUserStatus(){
        return this.username;
    }

    getUserName(){}

    getUserStatus(){}

}

module.exports = User;