const btnMandar = document.querySelector("#button-add");


function addTarefa(){
       
       const taskTitle = document.querySelector("#name").value;
    

       if(taskTitle){
        const template = document.querySelector(".template");
        const done = document.querySelector(".done")

        const newTask = template.cloneNode(true);

        newTask.querySelector(".task-title").textContent=taskTitle;

        newTask.classList.remove("template");
        newTask.classList.remove("hide")

        const list =  document.querySelector('#task-list')

        list.appendChild(newTask);

        document.querySelector('#name').value="";
        document.getElementById("container").style.marginTop="60px";

        const removerBtn = newTask.querySelector("#task-remover").addEventListener("click", function(){
            newTask.classList.add("hide")
        })

        const adicionarDone = newTask.querySelector("#task-done").addEventListener("click", function(){
            newTask.classList.add("done")
        })
         


       }

}










btnMandar.addEventListener("click", addTarefa,)