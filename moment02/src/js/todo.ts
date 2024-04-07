
import { list } from "./interface"


let todoList: list = new list();
const todoForm = <HTMLElement>document.getElementById('todoForm');
const taskInput = <HTMLInputElement>document.getElementById('task');
const priorityInput = <HTMLInputElement>document.getElementById('priority');
const todoListDiv = <HTMLElement>document.getElementById('todoList');

window.addEventListener("load", showTodos);

function showTodos(): void {
    todoListDiv.innerHTML = '';
    todoList.getTodos().forEach((todo: Todo, index: number) => {
        const todoItem = <HTMLElement>document.createElement('div');
        const ButtonAL= <HTMLButtonElement>document.createElement('button');
        let value: string = "";
        ButtonAL.type = "submit"
        ButtonAL.className = "btn"
        ButtonAL.textContent = "Radera"
        ButtonAL.id = `todoRE${index}`
        
        todoItem.className = "myElement";
        if (todo.completed === true) {
            todoItem.style.textDecoration = ('line-through');
            todoItem.style.textDecorationColor = 'red';
            todoItem.style.textDecorationThickness = '2px';
            value = "JA"
        } else {
            todoItem.style.textDecoration = 'none';
            value = "Nej"
        }

        todoItem.innerHTML = `
            <ul>
                <li>Att göra: ${todo.task}</li>
                <li>Prioritering: ${todo.priority}</li>
                <li>Genomförd: ${value}</li>
            </ul>
            <button type="submit" name="completed" id="todo${index}" class="btn">Markera som klar</button>
            
        `;

        
        let addMark = <HTMLElement>todoItem.querySelector(`#todo${index}`);
        addMark.addEventListener('click', addmarkCompledted);
        function addmarkCompledted(): void {
            todoList.markTodoCompleted(index);
            showTodos();
        };

        todoItem.appendChild(ButtonAL);
        todoListDiv.appendChild(todoItem);
    });
}

todoForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const task: string = taskInput.value;
    const priority: number = parseInt(priorityInput.value);
    console.log(priority);
    if (todoList.addTodo(task, priority)) {
        taskInput.value = '';
        priorityInput.value = '5';
        showTodos();
    } else {
        console.error('vänligen lägg in ett value');
    }
});

document.getElementById("clearbutton")?.addEventListener('click', () => {
    todoList.clearItems();
    showTodos(); 
});



function removerFunction(event): void {
    const target = event.target;
    if (target.tagName === "BUTTON") {
        const divParent = target.parentElement;
        if (divParent.tagName === "DIV") {
            divParent.remove();
            const index = parseInt(target.id.replace("todoRE", ""));
            todoList.removeTodoEL(index);
            localStorage.setItem("items", JSON.stringify(todoList.getTodos()));
        }
    }
}


todoListDiv.addEventListener("click", removerFunction);



