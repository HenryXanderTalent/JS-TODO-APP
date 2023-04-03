//array for all
let data = []
//array for completed only
let dataCom = []
//array for active only
let dataAct = []

//Key DOM area selectors
const tasksContainerAct = document.getElementById("dom-space-div-act");
const tasksContainerCom = document.getElementById("dom-space-div-com");
const tasksContainer = document.getElementById("dom-space-div");
const taskInput = document.querySelector("#input-task"); 
const taskQty = document.getElementById("items-num");

//ID for each task added
let id = 0

//submit task name
taskInput.addEventListener("keydown", (e) => {

    const press = e.key;

    if(press === 'Enter') {

        addTask(e.target.value);
      
        taskInput.value = '' 

    }

});

//add task to array
function addTask(task) {

    id++

    data.push({
        id: `${id}`,
        task: `${task}`,
        completed: false
    })
    
    addAllDiv(data)

    dataAct = data.filter((t) => {
        return t.completed === false
    })

    taskQty.innerText = dataAct.length

}

//display all tasks in the DOM
function addAllDiv(data){
    
    const allList = data.map((all) => {

        const { id, task, completed } = all;
        
        if(completed === false) {

        return `
        <div class="task-card" id="${id}">
            <button class="comp-btn-blue" type="button" id="${id + '-comp'}" onclick="getClickID(this.id)"></button>
            <span id="${id + '-compSpan'}">${task}</span>
            <button class="clr-btn" type="button" id="${id + '-clr'}" onclick="getID(this.id)">&times;</button>
        </div>
        `;

        } else if(completed === true) {

        return `
        <div class="task-card" id="${id}" draggable="true">
            <button class="comp-btn-red" type="button" id="${id + '-comp'}" onclick="getClickID(this.id)"></button>
            <span id="${id + '-compSpan'}">${task}</span>
            <button class="clr-btn" type="button" id="${id + '-clr'}" onclick="getID(this.id)">&times;</button>
        </div>
        `;    
        
        }

        }).join("");
    
    tasksContainerCom.innerHTML = ''
    tasksContainerAct.innerHTML = ''
    tasksContainer.innerHTML = allList;

}

//Get id of the button pressed and set as completed and sort arrays
function getClickID(clickID){
    //console.log(clickID)

    let btnColor = document.getElementById(clickID)

    btnColor.style.backgroundImage = "./images/icon-check.svg"
    btnColor.style.backgroundColor = "hsl(220, 98%, 61%)"
    
    let textColor = document.getElementById(clickID + 'Span')
    textColor.style.color = "hsl(233, 11%, 84%)"
    textColor.style.textDecoration = "line-through"

    for(let i = 0; i < data.length; i++){
        if(data[i].id +'-comp'== clickID) {
            data[i].completed = true
            
            dataCom.push(data[i])
            break;
        } 
    }

    dataCom = data.filter((t) => {
        return t.completed === true
    })

    dataAct = data.filter((t) => {
        return t.completed === false
    })

    taskQty.innerText = dataAct.length

    console.log(data);
    console.log(dataCom);
    console.log(dataAct);
}

/*document.querySelectorAll('task-card').forEach((e) => {
    e.onclick = (e) => console.log(e.currentTarget.id)
})*/

//filter only completed tasks
let com = document.getElementById('com')

com.addEventListener('click', function(){

    const compList = dataCom.map((comp) => {

        const { id, task } = comp;

        return `
        <div class="task-card" id="${id}">
            <button class="comp-btn-red" type="button" id="${id + '-comp'}" onclick="getClickID(this.id)"></button>
            <span id="${id + '-compSpan'}">${task}</span>
            <button class="clr-btn" type="button" id="${id + '-clr'}" onclick="getID(this.id)">&times;</button>
        </div>
        `;    

        }).join("");
    
    tasksContainerAct.innerHTML = ''
    tasksContainer.innerHTML = ''
    tasksContainerCom.innerHTML = compList;

})

//filter only active tasks
let act = document.getElementById('act')

act.addEventListener('click', function(){

    const actList = dataAct.map((act) => {

        const { id, task } = act;

        return `
        <div class="task-card" id="${id}">
            <button class="comp-btn-blue" type="button" id="${id + '-comp'}" onclick="getClickID(this.id)"></button>
            <span id="${id + '-compSpan'}">${task}</span>
            <button class="clr-btn" type="button" id="${id + '-clr'}" onclick="getID(this.id)">&times;</button>
        </div>
        `;    

        }).join("");
    
    tasksContainerCom.innerHTML = ''
    tasksContainer.innerHTML = ''
    tasksContainerAct.innerHTML = actList;

})

//filter all tasks
let all = document.getElementById('all')

all.addEventListener('click', function(){

    addAllDiv(data)

})

//clear completed lists
let comClr = document.getElementById('clear-comp')

comClr.addEventListener('click', function(){

    dataCom = []
    //or dataCom.splice(0,dataCom.length)

    data = data.filter((t) => {
        return t.completed !== true
    })

    const actList = dataAct.map((act) => {

        const { id, task } = act;

        return `
        <div class="task-card" id="${id}">
            <button class="comp-btn-blue" type="button" id="${id + '-comp'}" onclick="getClickID(this.id)"></button>
            <span id="${id + '-compSpan'}">${task}</span>
            <button class="clr-btn" type="button" id="${id + '-clr'}" onclick="getID(this.id)">&times;</button>
        </div>
        `;    

        }).join("");
    
    tasksContainerCom.innerHTML = ''
    tasksContainer.innerHTML = ''
    tasksContainerAct.innerHTML = actList;

})

//clear completed item from lists
function getID(ID) {
    
    for(let i = 0; i < data.length; i++){
        if(data[i].id +'-clr'== ID) {
            data.splice(i, 1)
            break;
        } 
    }

    for(let i = 0; i < dataCom.length; i++){
        if(dataCom[i].id +'-clr'== ID) {
            dataCom.splice(i, 1)
            break;
        } 
    }

    for(let i = 0; i < dataAct.length; i++){
        if(dataAct[i].id +'-clr'== ID) {
            dataAct.splice(i, 1)
            break;
        } 
    }

    //update items left 
    taskQty.innerText = dataAct.length
    //console.log(data)

    //render the dom on the current filter
    let space = document.getElementById(ID)
    //console.log(space.parentNode.parentNode)

    if(tasksContainerAct == space.parentNode.parentNode){
        
        const actList = dataAct.map((act) => {

            const { id, task } = act;
    
            return `
            <div class="task-card" id="${id}">
                <button class="comp-btn-blue" type="button" id="${id + '-comp'}" onclick="getClickID(this.id)"></button>
                <span id="${id + '-compSpan'}">${task}</span>
                <button class="clr-btn" type="button" id="${id + '-clr'}" onclick="getID(this.id)">&times;</button>
            </div>
            `;    
    
            }).join("");
        
        tasksContainerCom.innerHTML = ''
        tasksContainer.innerHTML = ''
        tasksContainerAct.innerHTML = actList;

    } else if (tasksContainerCom == space.parentNode.parentNode) {

        const compList = dataCom.map((comp) => {

            const { id, task } = comp;
    
            return `
            <div class="task-card" id="${id}">
                <button class="comp-btn-red" type="button" id="${id + '-comp'}" onclick="getClickID(this.id)"></button>
                <span id="${id + '-compSpan'}">${task}</span>
                <button class="clr-btn" type="button" id="${id + '-clr'}" onclick="getID(this.id)">&times;</button>
            </div>
            `;    
    
            }).join("");
        
        tasksContainerAct.innerHTML = ''
        tasksContainer.innerHTML = ''
        tasksContainerCom.innerHTML = compList;

    } else {
        
        const allList = data.map((all) => {

            const { id, task, completed } = all;
            
            if(completed === false) {
    
            return `
            <div class="task-card" id="${id}">
                <button class="comp-btn-blue" type="button" id="${id + '-comp'}" onclick="getClickID(this.id)"></button>
                <span id="${id + '-compSpan'}">${task}</span>
                <button class="clr-btn" type="button" id="${id + '-clr'}" onclick="getID(this.id)">&times;</button>
            </div>
            `;
    
            } else if(completed === true) {
    
            return `
            <div class="task-card" id="${id}">
                <button class="comp-btn-red" type="button" id="${id + '-comp'}" onclick="getClickID(this.id)"></button>
                <span id="${id + '-compSpan'}">${task}</span>
                <button class="clr-btn" type="button" id="${id + '-clr'}" onclick="getID(this.id)">&times;</button>
            </div>
            `;    
            
            }
    
            }).join("");
            
        tasksContainerCom.innerHTML = ''
        tasksContainerAct.innerHTML = ''
        tasksContainer.innerHTML = allList;

    }

}

//to highlight text based on filter mode
function findID(fid) {

    let filter = document.getElementById(fid)

    //should be while but keeps crashing machine/app
    //if(tasksContainer.innerHTML !== ''){
    //    filter.style.color = "hsl(220, 98%, 61%)"
    //} 
}

//toggle light/dark
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){

    document.body.classList.toggle('dark')
    
})

//toggle light/dark mode image/button
function changeImage(){

    let displayImage = document.getElementById('toggleDark')

    if(displayImage.src.match('./images/icon-moon.svg')) {

        displayImage.src = './images/icon-sun.svg'

    } else {

        displayImage.src = './images/icon-moon.svg'

    }
}

//reference code for future projects********************
//alternative way to add new elements to the DOM

/*
//add task to list
function addDiv(num, task) {

        let newcard = document.createElement('div')
        let newElementRadio = document.createElement('input')
        let newElementInput = document.createElement('span')
        let newElementcross = document.createElement('button')
      
        //console.log(newElementCross);
    
        tasksContainer.appendChild(newcard).classList.add('task-card')
        newcard.appendChild(newElementRadio).setAttribute('type', 'radio')
        newcard.appendChild(newElementInput).textContent = task
        newcard.appendChild(newElementcross).setAttribute('class', 'bt')
        //.classList.add('card-btn')

        for(let i = 0; i < data.length; i++) {

            tasksContainer.lastChild.setAttribute('id', num)
    
        }
    
}*/
