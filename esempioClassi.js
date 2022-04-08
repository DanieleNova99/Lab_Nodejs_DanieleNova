module.exports = class WelcomeMessage{
    constructor(name){
        this.name = name;
    }

    saluta(){
        console.log(this.name);
    }
}