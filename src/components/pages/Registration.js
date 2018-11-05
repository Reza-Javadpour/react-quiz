import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {registerUser} from "../../actions";

class Registration extends Component {

    // static propTypes = {
    //     name : PropTypes.string.isRequired,
    //     email : PropTypes.string,
    // };

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         fullname : '',
    //         input_validate_classes : "form-control",
    //         email : ''
    //     }
    // }

    state = {
        fullname : '',
        inputInvalid : '',
        email : ''
    };

    changeFieldValue = (event) => {
        this.setState({fullname : event.target.value});

        this.setState({
            inputInvalid : ''
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            'fullname' : ''
        });
        if (this.state.fullname !== ""){
            this.props.history.push('/quiz');
            this.props.dispatch(registerUser(this.state.fullname));
        }else{
            this.setState({
                inputInvalid : 'is-invalid'
            });
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row intro_section">
                    <div className="col-lg-4 m-auto">

                        <h2>Enter your inforamtion</h2>

                        <form onSubmit={this.handleSubmit}>
                            <fieldset>

                                <div className="form-group has-danger">
                                    <label htmlFor="fullname">Full Name</label>
                                    <input type="text"
                                           className={"form-control " + this.state.inputInvalid}
                                           id="fullname"
                                           name="fullname"
                                           value={this.state.fullname}
                                           onChange={this.changeFieldValue}
                                           placeholder="Enter your name"/>
                                    <div className="invalid-feedback">You must input your Name.</div>
                                </div>

                                {/*<div className="form-group">*/}
                                    {/*<label htmlFor="email">Email address</label>*/}
                                    {/*<input type="email"*/}
                                           {/*className="form-control"*/}
                                           {/*id="email"*/}
                                           {/*name="email"*/}
                                           {/*value={this.state.email}*/}
                                           {/*onChange={this.changeFieldValue.bind(this)}*/}
                                           {/*placeholder="Enter your email"/>*/}
                                        {/*<small id="emailHelp" className="form-text text-muted">*/}
                                            {/*We'll never share your email with anyone else.*/}
                                        {/*</small>*/}
                                {/*</div>*/}

                                {/*<fieldset className="form-group">*/}
                                    {/*<label>Gender</label>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input type="radio" className="form-check-input" name="optionsRadios"*/}
                                                   {/*id="optionsRadios2" value="male"/>*/}
                                            {/*Male*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input type="radio" className="form-check-input" name="optionsRadios"*/}
                                                   {/*id="optionsRadios2" value="female"/>*/}
                                            {/*Female*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                {/*</fieldset>*/}

                                <button type="submit" className="btn btn-info intro_submit_button">Continue</button>

                            </fieldset>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Registration);