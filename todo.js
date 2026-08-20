const input=document.querySelector("#todoInput");
const addbtn=document.querySelector(".Add");
const todolist=document.getElementById("todolist");



addbtn.addEventListener('click',()=>{ //callback function
    const task=input.value.trim();
    if(task===""){
        return;
    }
    const li=document.createElement('li')
    li.textContent=task;

    const editbtn=document.createElement('button')
    editbtn.textContent='Edit';

    const deletebtn= document.createElement("button")
    deletebtn.textContent='Delete';
    
    li.appendChild(editbtn);

    li.appendChild(deletebtn);
    todolist.appendChild(li);
    input.value= '';
})
    todolist.addEventListener('click',(event)=>{

        if(event.target.textContent==='Edit'){
            const li=event.target.parentElement;

            const newTask= prompt("edit your task :",li.firstChild.textContent);

            if(newTask!==null & newTask.trim()!==""){
                li.firstChild.textContent=newTask.trim();
            }
            return;
        }
        if(event.target.tagName==='BUTTON'){
            event.target.parentElement.remove();
            return;
        }
        if(event.target.tagName==='LI'){
            event.target.classElement.toggle('completed')
        }
});

input.addEventListener("keydown", (event) => {

   if(event.key==='Enter'){
    addbtn.click();
   }

});


