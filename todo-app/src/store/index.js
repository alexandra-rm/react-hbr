import {decorate, action, computed, observable} from 'mobx';

class Store {
    tasks = [
        {id: 0, title: 'Create app', done: false},
        {id: 1, title: 'Make task', done: true},
        {id: 2, title: 'Create simple task', done: false},
    ];

    setTasks(payload){
        this.tasks = payload;
    }

    get activeTasks() {
        return this.tasks.filter(task => !task.done).length;
    }

    get sortedTasks() {
        return this.tasks
            .slice()
            .sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));
    }

    addTask(task){
        let tasks = this.tasks;

        tasks.push({
            id: tasks.length || 0,
            title: task,
            done: false,
        });

        this.setTasks(tasks);
    }

    deleteTask(id){
        this.setTasks(this.tasks.filter(item => item.id !== id));
    }

    doneTask(id){
        let tasks = this.tasks;

        const index = tasks.map(task => task.id).indexOf(id);

        tasks[index].done = true;

        this.setTasks(tasks);
    }
}

Store = decorate(Store, {
    tasks: observable,
    activeTasks: computed,
    sortedTasks: computed,
    addTask: action,
    deleteTask: action,
    doneTask: action,
});

export default new Store();
