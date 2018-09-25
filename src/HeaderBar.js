import React, { Component } from 'react';
import FormAdd from './FormAdd';

class HeaderBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowForm: false,
            iconAddOrClose: false,
            textAddOrClose: false,
            strSearch: '',
            strSort: '',
            order: {},
        }
    }

    toggleFormAdd = () => {
        this.setState({
            isShowForm: !this.state.isShowForm,
            iconAddOrClose: !this.state.iconAddOrClose,
            textAddOrClose: !this.state.textAddOrClose
        })
    }

    handleSearch = event => {
        this.props.ahihiSearch(this.state.strSearch.trim());
        event.preventDefault();
    }

    handleChangeSearch = event => {
        this.setState({
            strSearch: event.target.value
        });
    }

    handleCancel = () => {
        this.setState({ strSearch: '' }, () => {
            this.props.ahihiSearch('');
        })
    }

    handleSort = typeSort => {
        this.props.ahihiSort(parseInt(typeSort.target.value, 10));
    }

    stringSort = (typeSort = 0) => {
        switch (parseInt(typeSort, 10)) {
            case 1: this.setState({ stringSort: 'Name-Asc' })
                break;
            case 2: this.setState({ stringSort: 'Name-Desc' })
                break;
            case 3: this.setState({ stringSort: 'Level-Asc' })
                break;
            default: this.setState({ stringSort: 'Level-Desc' })
            break;
        }
    }

    addNewTask = (taskName, taskLevel) => {
        this.props.save(taskName, taskLevel);
    }

    reject = () => {
        this.toggleFormAdd();
    }

    render() {
        const formAdd = this.state.isShowForm ? <FormAdd save={this.addNewTask} cancel={this.reject} /> : '';
        const icon = this.state.iconAddOrClose ? 'fa fa-close' : 'fa fa-plus';
        const textForm = this.state.textAddOrClose ? 'Close form' : 'Add new task';

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <form onSubmit={this.handleSearch}>
                            <div className="input-group">
                                <input type="text" className="form-control input-sm" value={this.state.strSearch} onChange={this.handleChangeSearch} placeholder="Search for..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-info btn-sm" type="button" onClick={this.handleSearch}>
                                        <i className="fa fa-search"></i> Search
                                </button>
                                    <button className="btn btn-warning btn-sm" type="button" onClick={this.handleCancel}>
                                        <i className="fa fa-refresh"></i> Clear
                                </button>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="col-md-8">
                            <select name="" id="" className="form-control input-sm" onChange={this.handleSort}>
                                <option value="0">Select to sort</option>
                                <option value="1">Name ASC</option>
                                <option value="2">Name DESC</option>
                                <option value="3">Level SH->L</option>
                                <option value="4">Level L->SH</option>
                            </select>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <p style={{ marginTop: '3px' }}><span className="label label-success" style={{ padding: '8px' }}>{this.state.strSort}</span></p>
                        </div>
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <button type="button" className="btn btn-info btn-block btn-sm" onClick={this.toggleFormAdd}>
                            <i className={icon}></i> {textForm}
                        </button>
                    </div>
                </div>
                <br />
                {formAdd}
            </div>
        );
    }
}

export default HeaderBar;