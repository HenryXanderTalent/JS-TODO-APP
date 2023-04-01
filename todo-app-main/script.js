const tasksContainer = document.getElementById("dom-space-div");
const taskInput = document.querySelector("#input-task"); 


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

    

    let newcard = document.createElement('div')
    let newElementRadio = document.createElement('input')
    let newElementInput = document.createElement('span')
    let newElementcross = document.createElement('button')
  
    //console.log(newElementCross);

    tasksContainer.appendChild(newcard).classList.add('task-card')
    newcard.appendChild(newElementRadio).setAttribute('type', 'radio')
    newcard.appendChild(newElementInput).textContent = task
    newcard.appendChild(newElementcross).setAttribute('id', 'bt')
    //.classList.add('card-btn')

    tasksContainer.lastChild.setAttribute('id', `${num}`)
    console.log(num);
    console.log(qty)

    document.getElementById(`${num}`).addEventListener('click', function() {
        //console.log(this.parentNode);
        //let removeCard = this.parentNode
        
        newcard.remove(this)
        
    })

}

const taskQty = document.getElementById("items-num");

taskQty.innerText = qty




