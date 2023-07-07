var addBtn=document.getElementsByClassName("todo-button")[0]
var todoList=document.getElementsByClassName("todo-list")[0]
var todoInp=document.getElementsByClassName("todo-inputs")[0]
var filterSelect=document.querySelector("select")


addBtn.addEventListener("click",addTodo)
todoList.addEventListener("click",manipulateTodo)
filterSelect.addEventListener("change",filterTodos)


function addTodo(ev){
ev.preventDefault()
 var todoContainer= document.createElement("div")
 todoContainer.classList.add("todo")

 var todoLi=document.createElement("li")
 todoLi.textContent=todoInp.value
 todoContainer.appendChild(todoLi)

 var completedBtn=document.createElement("button")
 completedBtn.innerHTML="<i class='fas fa-check'></i>"
completedBtn.classList.add("complete-btn")

 var deleteBtn=document.createElement("button")
 deleteBtn.innerHTML="<i class='fas fa-trash'></i>"
 deleteBtn.classList.add("trash-btn")

 todoContainer.appendChild(completedBtn)
 todoContainer.appendChild(deleteBtn)

 todoList.appendChild(todoContainer)

 todoInp.value=""
}


function manipulateTodo(evt){
// console.log(evt.target.classList);
 if(evt.target.classList[0]==="complete-btn"){
 var parent= evt.target.parentElement
 parent.classList.toggle("completed")
 }else if(evt.target.classList[0]=="trash-btn"){
  var parent= evt.target.parentElement
   parent.remove()
 }

}


function filterTodos(){

  switch(filterSelect.value){
    case "completed":
     Array.from(todoList.children).forEach((todo)=>{
         if(todo.classList.contains("completed")){
          todo.style.display="flex"
         }else{
          todo.style.display="none"
         }
      })
      break;
    case "uncompleted":
      Array.from(todoList.children).forEach((todo)=>{
        if(!todo.classList.contains("completed")){
         todo.style.display="flex"
        }else{
         todo.style.display="none"
        }
     })
     break;
     case "all":
      Array.from(todoList.children).forEach((todo)=>{
           todo.style.display="flex"
      })
      break;
      default:
        return
  }

}