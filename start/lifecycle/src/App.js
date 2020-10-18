import React, {Component} from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        // загрузить данные, необходимые для корректного отображения компонента
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.whatever !== this.props.whatever) {
            // сделать тут что-то важное
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // вернуть true если компонент нуждается в обновлении
        // вернуть false в противном случае
    }

    componentWillUnmount() {
        // навести порядок после удаления компонента
        // (например - убрать прослушиватели событий)
    }

    static getDerivedStateFromProps(props, state) {
    }

    getSnapshotBeforeUpdate() {
    }

    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App;
