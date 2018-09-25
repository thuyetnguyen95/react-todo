import React, { Component } from 'react';

class FormAdd extends Component {
    constructor(props) {
        super(props);

        this.state = { taskName: '', taskLevel: 0 , taskSelected: null};
        console.log(this.props.taskSelected);
    }

    saveTask = (event) => {
        if (this.state.taskName) {
            this.props.save(this.state.taskName, this.state.taskLevel)
            this.setState({ taskName: '', taskLevel: 0 });
        }

        event.preventDefault();
    }

    rejectTask = (event) => {
        this.setState({ taskName: '', taskLevel: 0 });
        this.props.cancel();
        event.preventDefault();
    }

    handleAddTaskName = (task) => {
        this.setState({ taskName: task.target.value.trim() });
    }

    handleAddLevel = (level) => {
        this.setState({ taskLevel: parseInt(level.target.value, 10) });
    }

    componentDidUpdate() {
        // console.log(this.props.taskSelected);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8 col-xs-offset-4">
                    <form onSubmit={this.saveTask}>
                        <div className="form-group col-md-8">
                            <input type="text" className="form-control input-sm" value={this.state.taskName} placeholder="Enter your task..." onChange={this.handleAddTaskName} />
                        </div>
                        <div className="form-group col-md-4" style={{ paddingRight: 0 }}>
                            <select className="form-control input-sm" onChange={this.handleAddLevel} value={this.state.taskLevel}>
                                <option value="0">Low</option>
                                <option value="1">Medium</option>
                                <option value="2">High</option>
                                <option value="3">Super high</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4 col-xs-offset-8" style={{ paddingRight: 0 }}>
                            <p>
                                <span className="input-group-btn">
                                    <button type="button" className="btn btn-primary btn-sm" style={{ width: '50%' }} onClick={this.saveTask}>
                                        <i className="fa fa-check"></i> Save</button>
                                    <button type="button" className="btn btn-warning btn-sm" style={{ width: '50%' }} onClick={this.rejectTask}>
                                        <i className="fa fa-close"></i> Cancel
                                    </button>
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormAdd;