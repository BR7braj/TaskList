//Define UI vars
// 7th April 2019
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listners

loadAllEventListners();
function loadAllEventListners()
 {  
     form.addEventListener('submit',addTask);
     //remove task listner
     taskList.addEventListener('click',removeTask);

 }

 function removeTask(e){
     if(e.target.parentElement.classList.contains('delete-item'))
       {
          // console.log(e.target);
          if(confirm('Are you sure?'))
            {
                e.target.parentElement.parentElement.remove();


            }
       }
     console.log(e.target);
 }

 function addTask(e)
  {  
    e.preventDefault();
      if(taskInput.value === '')
        {
            alert('add a task')
        }
        const li = document.createElement('li');
        li.className = 'collection-item';
        //create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement('a');
        link.className = "delete-item secondary-content";
        link.innerHTML = "<i class='fa fa-remove'></i>";
        li.appendChild(link)
        taskList.appendChild(li);
        taskInput.value = '';
  }