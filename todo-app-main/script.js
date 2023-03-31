const tasksContainer = document.getElementById("dom-space-div")
const taskInput = document.querySelector("#input-task"); 

taskInput.addEventListener("keydown", (e) => {

    const press = e.key;

    if(press === 'Enter') {

        output(e.target.value);
        //displayTask(e.target.value);
        //console.log(e.target.value);

    }

});


let onEnter = function output1(task){
    let newcard = document.createElement('div')
    tasksContainer.appendChild(newcard)

    let newradio = document.createElement('input').setAttribute('type', 'radio')
    newcard.appendChild(newradio)

    let newspan = document.createElement('span')
    newspan.textContent = task
    newcard.appendChild(newspan)
    

    let newcross = document.createElement('button')
    newcross.innerHTML = "&times;"
    newcard.appendChild(newcross)
    
}



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

function output(task){

    num++

    let newcard = document.createElement('div')
    let newElementRadio = document.createElement('input')
    let newElementInput = document.createElement('span')
    let newElementcross = document.createElement('button')

    //newElementInput.textContent = task
    
   // console.log(newElementCross);

    
    tasksContainer.appendChild(newcard).classList.add('task-card')
    newcard.appendChild(newElementRadio).setAttribute('type', 'radio')
    newcard.appendChild(newElementInput).textContent = task
    newcard.appendChild(newElementcross).setAttribute('id', 'bt')
   //.classList.add('card-btn')

    tasksContainer.lastChild.setAttribute('id', `${num}`)
}


const btn = document.getElementById('bt')
console.log(btn)
//btn.addEventListener('click', remove) 

function remove(){
    //let div = btn.parentNode//   document.getElementsByClassName('task-card')
    //div.remove(div)
    console.log(btn.parentNode);

    btn.parentNode.removeChild()
}


