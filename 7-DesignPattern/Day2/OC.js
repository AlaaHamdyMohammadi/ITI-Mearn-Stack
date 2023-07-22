class ChooseQu{
    constructor(description, options){
        this.description = description;
        this.options = options;
    }
    printAnswer(){
        this.options.forEach((option, i) => {
            console.log(`${i + 1}-${option}`);
        });
    }
}

class BooleanQu{
    constructor(description){
        this.description = description;
    }
    printAnswer(){
        console.log('true or false');
    }
}

class TextQu{
    constructor(description){
        this.description = description;
    }
    printAnswer(){
        console.log('Answer: ----------');
    }
}

const questions = [
    new BooleanQu('Happy ?'),
    new TextQu('tell me '),
    new ChooseQu('What is ?', ['one', 'two', 'three']),
]

function printQuestions(questions){
    questions.forEach(question => {
        console.log(question.description);
        question.printAnswer();
    })
}
printQuestions(questions)