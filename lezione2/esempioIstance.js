class WelcomeMessage{
    constructor(name){
        this.name = name;
    }

    saluta(){
        console.log(this.name);
    }
}

module.exports = new WelcomeMessage("Roberto due");