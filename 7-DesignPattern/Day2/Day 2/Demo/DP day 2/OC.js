class ChooseQu{
    constructor(description,options){
        this.description =description;
        this.options=options;
    }
    printAnswer(){
        this.options.forEach(function(option,i){
            console.log(`${i+1} - ${option}`);
        })
    }
}

class BooleanQu{
    
    constructor(description){
        this.description = description;
    }

    printAnswer(){
        console.log("true or false");
    }
}

class TextQu{
    constructor(description){
        this.description = description;
    }

    printAnswer(){
        console.log("your answer : --------------------");
    }
}

class RangeQu{
    constructor(description){
        this.description = description;
    }
    printAnswer(){
        console.log("10% 20% 30% 40 % 50%");
    }
}

var questions=[
    new BooleanQu("observer pattern is a creational design pattern?"),
    new TextQu("what is design patterns"),
    new ChooseQu('what is your fav language ?',["html","css","js"]),
    new RangeQu("what is your range ?")
]

function printQuestions(questions){
     questions.forEach(function(question){
        console.log(question.description);
        question.printAnswer()
     })
}

printQuestions(questions)