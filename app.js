var myModule = angular.module('StudentQuizApp', []);

myModule.controller('quizProgramController', ['$scope', function($scope) {

    var qpc = this;

    qpc.students = [
        {
            name: "Jeffry",
            correct: 0,
            wrong: 0
        },

        {
            name: "Brandon",
            correct: 0,
            wrong: 0
        },

        {
            name: "Mary",
            correct: 0,
            wrong: 0
        },

        {
            name: "Sarmi",
            correct: 0,
            wrong: 0
        }, 
        {
            name: "Jon",
            correct: 0,
            wrong: 0
        }
    ];

    qpc.questions = [{
            question: "What is the capital of Texas?",
            answer: "Austin"
        },

        {
            question: "How many states are in the U.S.?",
            answer: "50"
        },

        {
            question: "What is the name of the current President?",
            answer: "Barack Obama"
        },

        {
            question: "What color is the sky?",
            answer: "Blue"
        }, {
            question: "What color is the Moon?",
            answer: "Gray"
        }
    ];

    function shuffle(originalarray) {
        var shuffledarray = [];

        var currentindex = originalarray.length - 1;
        
        var randomindex = currentindex;
        var value = 0;

        while (-1 !== currentindex) {
            randomindex = Math.floor(Math.random() * currentindex);

            value = originalarray[randomindex];

            shuffledarray.push(value);
            originalarray.splice(randomindex, 1);
            console.log(currentindex);            

            currentindex--;


            /*            
            var tempvalue = originalarray[currentindex];
            
            originalarray[currentindex] = shuffledarray[randomindex];
            */
        };
        
        return shuffledarray;

    };

    qpc.shuffledStudents = shuffle(qpc.students);
    
    for(var i = 0; i < qpc.shuffledStudents.length; i++)
    {
        console.log(qpc.shuffledStudents[i].name);
    }
    
    qpc.shuffledQuestions = shuffle(qpc.questions);    
    
    for(var i = 0; i < qpc.shuffledQuestions.length; i++)
    {
        console.log(qpc.shuffledQuestions[i].question);
    }    
    

    
    qpc.currIndex = 0;

    qpc.getnext = function() {
        
        qpc.selectedStudent = qpc.shuffledStudents[qpc.currIndex];
        qpc.selectedQuestion = qpc.shuffledQuestions[qpc.currIndex++];
        
        console.log(qpc.currIndex);
        
        if(qpc.currIndex >= 4){
            qpc.currIndex = 0;
        }
    }
    
    qpc.getnext();    

    /*
    qpc.getRandstudent = function(){
        qpc.selected_random_number = Math.floor(Math.random() * 4);
        qpc.selected_student = qpc.students[qpc.selected_random_number];
        qpc.selected_student.correct++;
        qpc.selected_student.wrong++;
    }*/

}]);