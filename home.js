const myquestions = [
  {
    questions: "what is your name ?",
    answers: {
      a: "Rohan",
      b: "Rajat",
      c: "Sumit",
      d: "Rahul"
    },
    correctanswer: "a"
  },
  {
    questions: "what is your hobby ?",
    answers: {
      a: "Cricket",
      b: "Football",
      c: "Hockey",
      d: "BasketBall"
    },
    correctanswer: "a"
  },
  {
    questions: "what is your city ?",
    answers: {
      a: "Noida",
      b: "Patna",
      c: "HighTechCity",
      d: "cyberabad"
    },
    correctanswer: "a"
  },
  {
    questions: "what is your passion ?",
    answers: {
      a: "Developer",
      b: "Cricketer",
      c: "Doctor",
      d: "Dancer"
    },
    correctanswer: "a"
  },
  {
    questions: "what is your love ?",
    answers: {
      a: "Developer",
      b: "Cricketer",
      c: "Doctor",
      d: "Dancer"
    },
    correctanswer: "a"
  }
]
const quiz = document.getElementById('quiz');
const ques = document.getElementById('question');
const answer = document.getElementById('answer');
const results = document.getElementById('result');
const mainNextBtn = document.getElementById('submit1');
var count=0;
let abc = [];
var i = 0;
var a;
var arrayLength= myquestions.length;
//alert(arrayLength);

function options(i) {
  abc = [];
  $.each(myquestions[i].answers, function (key, value) {
    abc.push(
      `<label>
        <input type="radio" name="radio" value="${value}" >
        ${value}
    </label>`
    );
  });
}
options(i);

function myfunction() {
  ques.innerHTML = "Q.) " + myquestions[i].questions;
  answer.innerHTML = abc.join('');
}


function buttons(){
  count=1;
  if(count==1){
     a= ++i;
    ques.innerHTML = "Q.) " + myquestions[a].questions;
    options(a);
    answer.innerHTML = abc.join(''); 

    document.getElementById('submit').style.display = "inline-block";
    document.getElementById('submit1').style.display = "none";
    document.getElementById('submit2').style.display = "inline-block";  
  }
}
function nextques(){ 
  ++a;

    if((arrayLength-1) > a){
    ques.innerHTML = "Q.) " + myquestions[a].questions;
    options(a);
    answer.innerHTML = abc.join(''); 
    }
    else{
      //alert(a);
      ques.innerHTML = "Q.) " + myquestions[a].questions;
      options(a);
      answer.innerHTML = abc.join('');

      document.getElementById('submit').style.display = "inline-block";
      document.getElementById('submit1').style.display = "none";
      document.getElementById('submit2').style.display = "none";
      document.getElementById('submitBtn').style.display = "inline-block";  
    }
    
}
function prevques(){
     --a;
     if((arrayLength-1) > 0){ 
     ques.innerHTML = "Q.) " + myquestions[a].questions;
     options(a);
     answer.innerHTML = abc.join('');
     }
     else{
       alert('12')
     }
 }
 

// lastframe();
mainNextBtn.addEventListener('click', buttons);
document.getElementById('submit2').addEventListener('click', nextques);
document.getElementById('submit').addEventListener('click', prevques);
