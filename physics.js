"use strict";
const data=[
    [
        "Separation of fibres of cotton from its seeds is known as?",
        [
            "weaving",
            "spinning",
            "knitting",
            "ginning"
        ],
        3
    ],
    [
        "Which one of the following is not soluble in water?",
        [
            "Turmeric powder",
            "Common salt",
            "Alum",
            "All are soluble"
        ],
        0
    ],
    [
        "Which one will show a metallic lustre?",
        [
            "Any surface of a metal",
            "Freshly cut surface of a metal",
            "Freshly cut surface of non-metal",
            "Surfaces of all materials"
        ],
        1
    ],
    [
        "Jute fibres are obtaine from?",
        [
            "seeds of jute plant",
            "fruit covering of jute plant",
            "roots of jute plant",
            "stem of jute plant"
        ],
        3
    ],
    [
        "Which is an example of a periodic motion?",
        [
            "Oscillation of a pendulum",
            "Motion of a bus on road",
            "A spinning top",
            "A stone dropped"
        ],
        0
    ],
    [
        "What is the SI unit of length?",
        [
            "metre",
            "cemimetre",
            "kilometer",
            "all of these"
        ],
        0
    ],
    [
        "Which one of the following is a function of leaves?",
        [
            "Photosynthesis",
            "Transpiration",
            "Both (a) and (b)",
            "Support fruits"
        ],
        2
    ],
    [
        "Which is not a part of a leaf?",
        [
            "Petiole",
            "Lamina",
            "Veins",
            "Nodes"
        ],
        3
    ],
    [
        "When a bar magnet is brought near iron dust, most of the dust sticks?",
        [
            "near the middle",
            "equally everywhere",
            "near two ends",
            "at the middle and ends"
        ],
        2
    ],
    [
        "When an opaque object comes in the path of light it forms?",
        [
            "an image with colours",
            "shadow",
            "black and white image",
            "depends on the colour of the light"
        ],
        1
    ],
    [
        "Wind is?",
        [
            "air around us ",
            "rising hot air",
            "air in motion",
            "none of these"
        ],
        2
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
            <div class="title">Science Quiz</div>
            <button class="start">Start</button>
        </div>
    `;    document.querySelector(".start").onclick=function() {
        new Task(data[counter]);
    }
}