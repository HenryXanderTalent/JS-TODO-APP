//data object

let data = []

const tasksContainer = document.getElementById("dom-space-div");
const taskInput = document.querySelector("#input-task"); 
const taskQty = document.getElementById("items-num");

taskInput.addEventListener("keydown", (e) => {

    const press = e.key;

    if(press === 'Enter') {

        output(e.target.value);
        //displayTask(e.target.value);
        //console.log(e.target.value);

    }

});

/*function displayTask(task) {

    tasksContainer.innerHTML = `
    <div class="task-card">
      <input type="radio" />
      <span >${task}</span>
      <button type="button">&times;</button>
    </div>
    `;

}*/

let num = 0
let qty = 0

function output(task){

    num++
    qty++

    data.push({
        id: `${num}`,
        task: `${task}`,
        progress: true,
        deleted: false
    })

    console.log(data)

    addDiv(num, task)
    //console.log(num);
    //console.log(qty)

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

    let rdo = document.getElementById(`${num}`)
    //console.log(rdo.firstChild)
    rdo.firstChild.addEventListener('click', function(){

        //console.log(rdo.getAttribute('id'))

        let rdoID = rdo.getAttribute('id')

        for(let i = 0; i < data.length; i++){
            if(data[i].id === rdoID) {
                data[i].progress = false
                break;
            }
        }

        console.log(data)

        //filter through objects to find it and set progress to false
    })

    taskQty.innerText = qty

}

function deleteTask(id) {
     
    for(let i = 0; i < data.length; i++){
        if(data[i].id === id) {
            data.splice(i, 1)
            break;
        }
    }

    //displayTasks()

    /*let dataFiltered = data

    data = dataFiltered.filter(function(t) {
        return t.id !== id
    })*/
 
}

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

        displayTasks()
    
}

function displayTasks() {

    //for each item in arr display it
    for(let i = 0; i < data.length; i++) {

        tasksContainer.lastChild.setAttribute('id', num)

    }
}

/*document.getElementById(`${num}`).addEventListener('click', function(){
      //console.log(this.parentNode);
    //let removeCard = this.parentNode   
    
    newcard.remove(this)
    qty--
    taskQty.innerText = qty

    //console.log(this.getAttribute('id'))
    deleteTask(this.getAttribute('id'))

    console.log(data)
}*/





