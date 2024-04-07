
export class list {
    task: string;
    completed: boolean;
    priority: number;
    todos: [];


    constructor(task: string, completed: boolean, priority: number) {
        this.task = task;
        this.completed = completed;
        this.priority = priority;
        this.loadFromLocalStorage();
    }
    // lägga till nya todos till todos array
    public addTodo(task: string, priority: number): boolean {
        if (!task || priority < 1 || priority > 3) {
            return false;
        }

        const newTodo: any = {
            task: task,
            completed: false,
            priority: priority
        };

        this.todos.push(newTodo); 
        this.listStorage();
        return true;
    }
    // markera todo list som klart och sparade i lokal storage
    public markTodoCompleted(todoIndex: number): void {
        if (todoIndex >= 0 && todoIndex < this.todos.length) {
            this.todos[todoIndex].completed = true;
            this.listStorage();
        }
    }
    // retunera array
    public getTodos(): any {
        return this.todos;
    }
    // spara todo list till lokal storage
    private listStorage(): void {
        localStorage.setItem('items', JSON.stringify(this.todos));
    }
    // hämta todo list från lokal storage
    private loadFromLocalStorage(): void {
        const storedTodos = JSON.parse(localStorage.getItem('items') || "[]" );
        this.todos = storedTodos;
    }
    // ta bort alla todo array && local storage
    public clearItems(): void {
        this.todos = [];
        localStorage.clear();
    }

    // ta bort en todo list med specifcek index && local storage
    public removeTodoEL(index: number): void {
        if (index >= 0 && index < this.todos.length) {
            this.todos.splice(index, 1);
            this.listStorage();
        }
    }
}
