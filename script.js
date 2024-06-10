// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const userIcon = document.querySelector('.user-icon');

    userIcon.addEventListener('click', () => {
        sidebar.classList.toggle('expanded');
       
    });
});



function toggleSection(id) {
    const sectionContent = document.getElementById(id);
    if (sectionContent.style.display === "block") {
        sectionContent.style.display = "none";
    } else {
        sectionContent.style.display = "block";
    }
}

function showMore(event) {
    const parent = event.target.parentNode;
    parent.style.height = "auto";
    event.target.style.display = "none";
}



async function fetchData() {
    try {
        const response = await fetch('http://localhost:8080/assets/uploads/files/files/others/ddugky_project.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data);

const task = data.tasks
const assets = task.map((e) =>{
return e.assets
})
 console.log("ass",assets)

// console.log(task)
const tasklist = assets.map((e) =>{

return e
})
const project_manager = document.querySelector('.project_manager')
const thread_build = document.querySelector('.Thread_build')
const structer_pointer = document.querySelector('.structure_pointer')
const sa_methods =document.querySelector('.sa_method')
const thread_des = document.querySelector('.thread_des')
const vedio_data = document.querySelectorAll('.vedio_data')
const structure_pointer_des =document.querySelector('.structure_pointer_des')
const sa_method_des = document.querySelector('.sa_method_des')
const asset_title =tasklist.map((e) =>{

project_manager.textContent = e[0].asset_title
thread_build.textContent = e[1].asset_title
structer_pointer.textContent = e[2].asset_title
sa_methods.textContent =e[3].asset_title


// Description
thread_des.textContent = e[1].asset_description
structure_pointer_des.textContent = e[2].asset_description
sa_method_des.textContent = e[3].asset_description

// Append vedio data
const iframe = document.createElement('iframe')

iframe.src = e[0].asset_content
iframe.frameBorder = "0"
  iframe.width = "450";
    iframe.height = "350"


vedio_data[0].appendChild(iframe)




})
    






const title =data.title
const heading_title = document.querySelector('.title')
heading_title.textContent = title

// task description

const task_description = task[0].task_description
const task_des = document.querySelector('.task_des')
task_des.textContent =task_description















    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

fetchData();