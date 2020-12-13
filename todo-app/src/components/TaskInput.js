import React, {Component} from 'react';

class TaskInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
        };
    }

    addTask = () => {
        const {input} = this.state;
        if (input) {
            console.log('TaskInput addTask IF input:', input);
            this.props.addTask(input);
            this.setState({input: ''});
        }
    };

    inputChange = event => {
        this.setState({input: event.target.value});
    };

    handleEnter = event => {
        if (event.key === 'Enter') {
            this.addTask();
        }
    };

    render() {
        const {input} = this.state;
        console.log('render input:', input);

        return (
            <div className="task-input">
                <input
                    onKeyPress={this.handleEnter}
                    onChange={this.inputChange}
                    value={input}
                />
                <button onClick={this.addTask}>Add</button>
            </div>
        );
    };
}

export default TaskInput;
