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
        };

        this.Header = React.createRef();
    }

    handleSearch = (strSearch = '') => {
        let items = this.state.listTask.filter((item) => {
                let itemName = item.name.toLowerCase();

                return itemName.indexOf(strSearch.toLowerCase()) !== -1;
            });

       this.setState({ items: items });
    }

    handleSort = (sortKey) => {
        this.setState({ sortKey: sortKey })
    }

    deleteTask = (id) => {
        let ahihi =  this.state.listTask.find((item) => {
            return item.id === id;
        })

        this.state.listTask.splice(this.state.listTask.indexOf(ahihi), 1);
        this.setState({
            items: this.state.listTask
        })
    }

    addNewTask = (taskName, taskLevel) => {
        this.state.listTask.push({
            id: this.state.listTask.length + 1,
            name: taskName,
            level: taskLevel
        })

        this.setState({ items: this.state.listTask })
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
                <HeaderBar ahihiSearch={this.handleSearch} ahihiSort={this.handleSort} save={this.addNewTask}/>
                <br />
                <List items={items} sort={sortKey} deleteTask={this.deleteTask}/>
            </div>
        );
    }
}

export default App;
