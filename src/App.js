import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DummyData from './data';
import HeaderBar from './HeaderBar';
import List from './List';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            listTask: DummyData.items,
            items: [],
            sortKey: null,
            strSearch: '',
        };

        this.headerBar = React.createRef();
    }

    handleSearch = (strSearch = '') => {
        this.setState({
            strSearch: strSearch
        }, () => {
            let items = this.state.listTask.filter((item) => {
                let itemName = item.name.toLowerCase();

                return itemName.indexOf(this.state.strSearch.toLowerCase()) !== -1;
            });

            this.setState({ items: items });
        })
    }

    handleSort = sortKey => {
        this.setState({ sortKey: sortKey })
    }

    addNewTask = (taskName, taskLevel) => {
        this.state.listTask.push({
            id: this.state.listTask.length + 1,
            name: taskName,
            level: taskLevel
        })

        this.setState({ items: this.state.listTask })
    }

    updateTask = task => {
        let listTask = this.state.listTask;
        let taskToUpdate = this.state.listTask.find(item => {
            return item.id === task.id;
        })

        listTask[listTask.indexOf(taskToUpdate)] = task;
        this.setState({ items: listTask })
        this.handleSearch(this.state.strSearch);
    }

    editTask = task => {
        this.headerBar.current.showFormEdit(task);
    }

    deleteTask = task => {
        this.state.listTask.splice(this.state.listTask.indexOf(task), 1);
        this.setState({
            items: this.state.listTask
        })
    }

    componentDidMount() {
        this.handleSearch();
    }

    render() {
        let sortKey = this.state.sortKey;
        let items = this.state.items;

        return (
            <div className="container">
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">TODO APP</h1>
                    </header>
                </div>
                <br />
                <HeaderBar
                    ahihiSearch={this.handleSearch}
                    ahihiSort={this.handleSort}
                    save={this.addNewTask}
                    update={this.updateTask}
                    ref={this.headerBar}
                />
                <br />
                <List items={items} sort={sortKey} delete={this.deleteTask} edit={this.editTask}/>
            </div>
        );
    }
}

export default App;
