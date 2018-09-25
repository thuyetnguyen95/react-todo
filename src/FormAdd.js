import React, { Component } from 'react';

class FormAdd extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8 col-xs-offset-4">
                    <div className="form-group col-md-8">
                        <input type="text" className="form-control input-sm" placeholder="Enter your task..." />
                    </div>
                    <div className="form-group col-md-4" style={{ paddingRight: 0 }}>
                        <select className="form-control input-sm">
                            <option value="">Low</option>
                            <option value="">Medium</option>
                            <option value="">High</option>
                            <option value="">Super high</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4 col-xs-offset-8" style={{ paddingRight: 0 }}>
                        <p>
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-primary btn-sm" style={{ width: '50%' }}>
                                    <i className="fa fa-check"></i> Save</button>
                                <button type="button" className="btn btn-warning btn-sm" style={{ width: '50%' }}>
                                    <i className="fa fa-close"></i> Cancel
                                    </button>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormAdd;