import React, {Component} from 'react';
import {observer} from 'mobx-react';

import Task from './components/Task';
import TaskInput from './components/TaskInput';
import store from './store';

class App extends Component {
  render() {
    const {sortedTasks, activeTasks} = store;

    return (
        <div className="App">
            <h1 className="top">Active tasks: {activeTasks}</h1>
          {sortedTasks.map(task =>
              <Task
                  doneTask={() => store.doneTask(task.id)}
                  deleteTask={() => store.deleteTask(task.id)}
                  task={task}
                  key={task.id}
              />
              )}
              <TaskInput addTask={v => store.addTask(v)} />
        </div>
    );
  };
}

export default observer(App);
