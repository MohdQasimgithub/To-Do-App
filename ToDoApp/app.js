let todoList=[
    // {
    //     item:'buy milk',
    //     dueDate:'20/04/2024'
    // },
    // {
    //     item:'Go to College',
    //     dueDate:'24/09/2024'
    // }
];
displayTodo();
function addTodo(){
let inputTodo=document.querySelector('#inputTag');
let dateTodo=document.querySelector('#dateTag');
let inputValue=inputTodo.value;
let dateValue=dateTodo.value;

todoList.push({item:inputValue, dueDate:dateValue});
inputTodo.value='';
dateTodo.value='';
displayTodo();
localStorage.setItem('todoList',JSON.stringify(todoList));
let data=JSON.parse(localStorage.getItem('todoList'));
console.log(data);
}
let btn=document.querySelector('#add');
btn.addEventListener("click",()=>{
    addTodo();
    
})
function displayTodo(){
    let newHtml='';
    let items=document.querySelector('.container-items');
    for(let i=0;i<todoList.length;i++){
        let {item,dueDate}=todoList[i];
        newHtml=newHtml+ 
        `
        <span class="newElement">${item}</span>
        <span class="newElement">${dueDate}</span>
        <button onclick="todoList.splice(${i},1);displayTodo();" id="del">Delete</button>

        `
    }
 items.innerHTML=newHtml;
}
// localStorage.clear();