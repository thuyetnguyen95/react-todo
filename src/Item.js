import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = { levelText: ''};
    }

    getLevelText = (level) => {
        switch (level) {
            case 1: return (<span className="label label-info">Medium</span>);
            case 2: return (<span className="label label-warning">High</span>);
            case 3: return (<span className="label label-danger">Supper High</span>);

            default: return (<span className="label label-default">Low</span>);
        }
    }

    editTask = () => {
        this.props.edit(this.props.value)
    }

    deleteTask = () => {
        this.props.delete(this.props.value);
    }
    
    render() {
        const value = this.props.value;
        const index = this.props.index + 1;
        const level = this.getLevelText(value.level);

        return (
            <tr>
                <td>{index}</td>
                <td>{value.name}</td>
                <td>
                    {level}
                </td>
                <td>
                    <span className="input-group-btn">
                        <button type="button" className="btn btn-info btn-sm" onClick={this.editTask}>
                            <i className="fa fa-edit" aria-hidden="true"></i>
                        </button>
                        <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteTask}>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                    </span>
                </td>
            </tr>
        );
    }
}

export default Item;