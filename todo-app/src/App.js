import React, {Component} from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        {id: 0, title: 'Create app', done: false},
        {id: 1, title: 'Make task', done: true},
        {id: 2, title: 'Create simple task', done: false},
      ]
    };
  };

  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);

    this.setState(state => {
      let {tasks} = state;

      tasks[index].done = true;

      return tasks;
    });
  };

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);

    this.setState(state => {
      let {tasks} = state;

      delete tasks[index];

      return tasks;
    });
  };

  addTasks = task => {
    console.log('App addTask task:', task);
    console.log('tasks before 0:', this.state.tasks);

    this.setState(state => {
      let {tasks} = state;

      console.log('tasks before:', tasks);

      tasks.push({
        id: tasks.length !== 0 ? tasks.length : 0,
        title: task,
        done: false,
      });
      console.log('tasks after:', tasks);
      return tasks;
    });
  };

  render() {
    const {tasks} = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);

    return (
        <div className="App">
            <h1 className="top">Active tasks: {activeTasks.length}</h1>
          {[...activeTasks, ...doneTasks].map(task =>
              <Task
                  doneTask={() => this.doneTask(task.id)}
                  deleteTask={() => this.deleteTask(task.id)}
                  task={task}
                  key={task.id}
              />
              )}
              <TaskInput addTask={this.addTasks} />
        </div>
    );
  };
}

export default App;
