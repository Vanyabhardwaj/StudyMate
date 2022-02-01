"use strict";
const data=[
    [
        "Which one of the following is a step in wastewater treatment?",
        [
            "Aeration",
            "Filtration",
            "Chlorination",
            "All of these"
        ],
        3
    ],
    [
        "Which are the gases involved in breathing?",
        [
            "O2 and NO2",
            "O2 and SO2",
            "O2 and O3",
            "O2 and CO2",
        ],
        3
    ],
    [
        "Which one of the following contains haemoglobin?",
        [
            "RBC",
            "WBC",
            "Platelets",
            "None of these"
        ],
        0
    ],
    [
        "A simple pendulum takes 42 sec. to complete 20 oscillations. What is its time period?",
        [
            "4.1s",
            "2.1s",
            "8.4s",
            "21s"
        ],
        1
    ],
    [
        "Image formed by a plane mirror is?",
        [
            "virtual and erect",
            "real and erect",
            "virtual and inverted",
            "real and inverted"
        ],
        0
    ],
    [
        "Heat from the sun reaches to us by?",
        [
            "convection",
            "radiation",
            "conduction",
            "all of these"
        ],
        1
    ],
    [
        "Which of the following set of substances contain acids?",
        [
            "Grapes, lime water",
            "Vinegar, soap",
            "Curd, vinegar",
            "Curd, milk of magnesia"
        ],
        2
    ],
    [
        "Which is a method to prevent rust?",
        [
            "Crystallization",
            "Sedimentation",
            "Galvanisation",
            "None of these"
        ],
        2
    ],
    [
        "The winds from oceans carry water and bring rain, are called?",
        [
            "typhoon",
            "monsoon",
            "cyclone",
            "none of these"
        ],
        1
    ],
    [
        "Which factor influences soil formation?",
        [
            "Climate",
            "Vegetation",
            "Parent rock",
            "All of these"
        ],
        3
    ]
];
let counter=0;
let score=0;

let root;

class Task {
constructor(task) {
    this.question=task[0];
    this.answers=task[1];
    this.correct=task[2];
    this.selected=-1;
    this.render();
}
render() {
    let container=document.createElement("div");
    container.classList="task";
    container.innerHTML+=`<div class="task_question">${this.question}</div>`;
    let answerBox=document.createElement("div");
    answerBox.classList="task_answers";
    this.answers.forEach((a,i)=>{
        let btn=document.createElement("button");
        btn.classList="task_btn";
        btn.innerText=a;
        btn.onclick=()=>{
            this.selectAnswer(i);
        }
        answerBox.appendChild(btn);
    });
    container.appendChild(answerBox);
    let submitBtn=document.createElement("button");
    submitBtn.classList="task_submit";
    submitBtn.innerText="Submit";
    submitBtn.onclick=()=>{
        this.submitAnswer();
    }
    container.appendChild(submitBtn);
    render(container,root);
}
selectAnswer(idx) {
    let btn=document.getElementsByClassName("task_btn");
    for(let i=0;i<btn.length;i++) {
        if(idx==i) {
            btn[i].classList.add("task_btn_selected");
        } else {
            btn[i].classList.remove("task_btn_selected");
        }
    }
    this.selected=idx;
}
submitAnswer() {
    let isCorrect=this.selected==this.correct;
    if(isCorrect) score++;
    let msg=`<div class="task_result ${isCorrect?'task_result_correct':''}">${isCorrect?"Correct!":"Wrong!"}</div>`;
    setTimeout(()=>{
        root.innerHTML=msg;
    },800-10);
    setTimeout(()=>{
        (++counter)>=data.length?root.innerHTML=`<div class="score">You scored ${Math.round(score/data.length*100)} %</div>`:new Task(data[counter]);
    },2800-10);
    document.querySelector(".task").style.animation="test 800ms";
}
}

const render=(el,p)=>{
    p.innerHTML="";
    p.appendChild(el);
}

onload=()=>{
    root=document.getElementById("root");
    root.innerHTML=`
        <div align="center">
            <div class="title">Science 7 Quiz</div>
            <button class="start">Start</button>
        </div>
    `;    document.querySelector(".start").onclick=function() {
        new Task(data[counter]);
    }
}