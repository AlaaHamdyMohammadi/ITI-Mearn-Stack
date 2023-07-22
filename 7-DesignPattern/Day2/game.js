'use strict';

class Attack{
    changePlan(plan){
        console.log('Attack :', plan);
    }
}
class Defence{
    changePlan(plan){
        console.log("Defence :", plan);
    }
}
class Meduim{
    changePlan(plan){
        console.log("Meduim :", plan);
    }
}

//change strategy between classes at run time
class Game{
    setStrategy(gamePlan){
        this.gamePlan = gamePlan;
    }
    makeChange(plan){
        return this.gamePlan.changePlan(plan);
    }
}

const plan ={
    from: 'attac',
    to: 'defence',
}

const attac = new Attack();
const defence = new Defence();
const game = new Game();

game.setStrategy(attac);
console.log(game.makeChange(plan));

game.setStrategy(defence);
console.log(game.makeChange(plan));

