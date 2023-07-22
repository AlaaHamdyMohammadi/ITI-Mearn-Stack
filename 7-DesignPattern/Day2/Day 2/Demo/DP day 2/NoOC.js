var questions=[
    {
        type: 'choose',
        description: 'what is your fav language ?',
        options:["html","css","js"],
        
    },
    {
        type: 'Boolean',
        description: 'observer pattern is a creational design pattern?'
    },
    {
        type:"text",
        description:"what is design patterns"
      
    },
    {
        type:"Range",
        description:"what is the range ?"
    }
];

function printQuestions(questions) {
    questions.forEach(function(question){
        console.log(question.description);
        if(question.type=='choose'){
          question.options.forEach(function(option){
            console.log(option);
          })
        }else if(question.type=="text"){
            console.log("answer is -----------------------------------");
        }else if(question.type=="Boolean"){
          console.log("true or false");
        }else if(question.type=="Range"){
            console.log("10% 20% 30% 40%");
        }
    })
}

printQuestions(questions)