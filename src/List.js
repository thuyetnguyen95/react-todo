import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = { items: [] }
    }

    sortNameAsc = (items) => {
        return items.sort((fistItem, secondItem) => {
            let fist = fistItem.name.toLowerCase();
            let second = secondItem.name.toLowerCase();
            
            if (fist > second) { return 1; }
            if (fist < second) { return -1; }
    
            return 0;
        })
    }

    sortNameDesc = (items) => {
        return items.sort((fistItem, secondItem) => {
            let fist = fistItem.name.toLowerCase();
            let second = secondItem.name.toLowerCase();
            
            if (fist > second) { return -1; }    
            if (fist < second) { return 1; }
    
            return 0;
        })
    }

    sortLevelAsc = (items) => {
        return items.sort((fistItem, secondItem) => {
            return secondItem.level - fistItem.level;
        })
    }

    sortLevelDesc = (items) => {
        return items.sort((fistItem, secondItem) => {
            return fistItem.level - secondItem.level;
        })
    }

    sortIdDesc = (items) => {
        return items.sort((fistItem, secondItem) => {
            return secondItem.id - fistItem.id;
        })
    }

    mapSort = (typeSort, items) => {
        switch (typeSort) {
            case 1: return this.sortNameAsc(items);
            case 2: return this.sortNameDesc(items);
            case 3: return this.sortLevelAsc(items);
            case 4: return this.sortLevelDesc(items);
            default: return this.sortIdDesc(items);
        }
    }

    deleteTask = (taskId) => {
        this.props.deleteTask(taskId);
    }

    render() {
        let items = this.mapSort(this.props.sort, this.props.items);
        let task = items.map((item, index) => {
            return (
                <Item key={index} value={item} index={index} deleteTask={this.deleteTask}/>
            )
        })

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-success">
                        <div className="panel-heading">List task</div>
                        <div className="panel-body">
                        </div>

                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th className="col-md-8">Task</th>
                                    <th>Level</th>
                                    <th className="col-md-1">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {task}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;