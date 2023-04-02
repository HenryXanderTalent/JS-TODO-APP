//data object

//array for all
let data = []
//array for completed only
let dataCom = []
//array for active only
let dataAct = []
//have 3 div space for the dom in html. when button is pressed hide others = set display to none
//setting a task as comp removes it from act arr and adds to com arr

const tasksContainerAct = document.getElementById("dom-space-div-act");
const tasksContainerCom = document.getElementById("dom-space-div-com");
const tasksContainer = document.getElementById("dom-space-div");
const taskInput = document.querySelector("#input-task"); 
const taskQty = document.getElementById("items-num");

/*
//create task name
taskInput.addEventListener("keydown", (e) => {

    const press = e.key;

    if(press === 'Enter') {

        output(e.target.value);
        //displayTask(e.target.value);
        //console.log(e.target.value);
        taskInput.value = '' 
    }

});

let num = 0
let qty = 0

//add task to array
function output(task){

    num++
    qty++

    data.push({
        id: `${num}`,
        task: `${task}`,
        progress: true
        //deleted: false
    })

    console.log(data)

    //addDiv1()
    addDiv(num, task)
    //console.log(num);
    //console.log(qty)

    //clear the task from list
    let prs = document.getElementById(`${num}`)
    //console.log(prs.lastChild)
    prs.lastChild.addEventListener('click', function(){
      
        tasksContainer.removeChild(this.parentNode)
        qty--
        taskQty.innerText = qty
    
        //console.log(this.getAttribute('id'))
        deleteTask(this.parentNode.getAttribute('id'))
    
        console.log(data)

    })

    //set task as complete
    let rdo = document.getElementById(`${num}`)
    //console.log(rdo.firstChild)
    rdo.firstChild.addEventListener('click', function(){

        //console.log(rdo.getAttribute('id'))

        let rdoID = rdo.getAttribute('id')

        for(let i = 0; i < data.length; i++){
            if(data[i].id === rdoID) {
                data[i].progress = false
                
                dataCom.push(data[i])
                break;
            }
        }
        console.log(dataCom)
        //console.log(data)
        
    })

    taskQty.innerText = qty

}

//delete task from array
function deleteTask(id) {
     
    for(let i = 0; i < data.length; i++){
        if(data[i].id === id) {
            data.splice(i, 1)
            break;
        }
    }
 
}


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
    
}

function addDiv1() {

    const allList = data.map((comp) => {

        const { num, task } = comp;

        return `
        <div class="task-card">
          <input type="radio" id="${task}"/>
          <span >${task}</span>
          <button type="button" id="${num}">&times;</button>
        </div>
        `;
    }).join("");
    
    tasksContainer.innerHTML = allList;

}

function displayTasks() {

    //for each item in arr display it

}

//filter only completed tasks
let com = document.getElementById('com')
//console.log(prs.lastChild)
com.addEventListener('click', function(){

    let dataFiltered = data

    dataFiltered = dataFiltered.filter(function(t) {
        return t.progress === false
    })

    console.log(dataFiltered)

    for(let i = 0; i < dataFiltered.length; i++) {

        if(dataFiltered[i].progress === false){

            addDiv(dataFiltered[i].id, dataFiltered[i].task)
            

        }
   
    }
       
    console.log(data)
    addCompDiv()
})


function addCompDiv(dataCom){
    
    const compList = dataCom.map((comp) => {

        const { task } = comp;

        return `
        <div class="task-card">
          <input type="radio" id="${task}"/>
          <span >${task}</span>
          <button type="button">&times;</button>
        </div>
        `;
    }).join("");
    tasksContainer.innerHTML = ''
    tasksContainerCom.innerHTML = compList;

}*/

//change radio input to button

//NEW CODE*****************************************************************************

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
    //qty++

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

//display all tasks
function addAllDiv(data){
    
    const allList = data.map((all) => {

        const { id, task, completed } = all;
        
        if(completed === false) {

        return `
        <div class="task-card" id="${id}">
            <button class="comp-btn-blue" type="button" id="${id + '-comp'}" onclick="getClickID(this.id)"></button>
            <span>${task}</span>
            <button class="clr-btn" type="button" id="${id + '-clr'}">&times;</button>
        </div>
        `;

        } else if(completed === true) {

        return `
        <div class="task-card" id="${id}">
            <button class="comp-btn-red" type="button" id="${id + '-comp'}" onclick="getClickID(this.id)"></button>
            <span>${task}</span>
            <button class="clr-btn" type="button" id="${id + '-clr'}">&times;</button>
        </div>
        `;    
        
        }

        }).join("");

    //tasksContainer.firstChild.setAttribute('id', num)
    
    tasksContainerCom.innerHTML = ''
    tasksContainerAct.innerHTML = ''
    tasksContainer.innerHTML = allList;

}

//Get id of the button pressed and set as completed and sort arrays
function getClickID(clickID){
    //console.log(clickID)

    

    let btnColor = document.getElementById(clickID)

    btnColor.style.backgroundColor = "red"

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
            <span>${task}</span>
            <button class="clr-btn" type="button" id="${id + '-clr'}">&times;</button>
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
            <span>${task}</span>
            <button class="clr-btn" type="button" id="${id + '-clr'}">&times;</button>
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
            <span>${task}</span>
            <button class="clr-btn" type="button" id="${id + '-clr'}">&times;</button>
        </div>
        `;    

        }).join("");
    
    tasksContainerCom.innerHTML = ''
    tasksContainer.innerHTML = ''
    tasksContainerAct.innerHTML = actList;

})