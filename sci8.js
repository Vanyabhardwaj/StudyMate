"use strict";
const data=[
    [
        "Seed drill is used for?",
        [
            "harvesting",
            "cleaning the seed",
            "sowing",
            "weeding"
        ],
        2
    ],
    [
        "Which of the following drug is an antipyretic?",
        [
            "insulin",
            "Alcohol",
            "Paracetamol",
            "Streptomycin"
        ],
        2
    ],
    [
        "Which one of the following metals is the most ductile?",
        [
            "Iron",
            "Copper",
            "Silver",
            "Gold"
        ],
        3
    ],
    [
        "Which one is not a coal product?",
        [
            "Coal tar",
            "coal gas",
            "none of these",
            "lime"
        ],
        3
    ],
    [
        "Which is non-renewable source of energy?",
        [
            "Natural gas",
            "Wind energy",
            "Mechanical energy",
            "Tidal energy"
        ],
        0
    ],
    [
        "The control centre of all the activities of a cell is?",
        [
            "nucleus",
            "nucleoplasm",
            "cytoplasm",
            "organelles"
        ],
        0
    ],
    [
        "Force acting on per unit area is called?",
        [
            "non-contact forces",
            "contact forces",
            "pressure",
            "force"
        ],
        2
    ],
    [
        "Which of the following produces least friction?",
        [
            "Composite friction",
            "Static friction",
            "Sliding friction",
            "Rolling friction"
        ],
        3
    ],
    [
        "Pitch of sound is determined by its?",
        [
            "frequency",
            "speed",
            "loudness",
            "amplitude"
        ],
        0
    ],
    [
        "Electroplating prevents?",
        [
            "dissociation",
            "shining",
            "passing of current",
            "corrosion"
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
            <div class="title">Science 8 Quiz</div>
            <button class="start">Start</button>
        </div>
    `;    document.querySelector(".start").onclick=function() {
        new Task(data[counter]);
    }
}