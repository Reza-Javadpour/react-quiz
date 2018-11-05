import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {getUser, setScore} from "../../actions";
import {connect} from "react-redux";
import * as store from "react-redux";

class Score extends Component {

    state = {
        score : 0,
        trueA : 0,
        falseA : 0
    };

    componentDidMount(){
        const { trueA , falseA } = this.props;
        let calculateScore = (parseInt(trueA)*2)-(parseInt(falseA));
        let score = calculateScore < 0 ? 0 : calculateScore;
        this.setState({
            score,
            trueA,
            falseA

        });
        this.props.dispatch(setScore(score));
    }



    // getUsername(){
        // this.props.dispatch(getUser(0));
        // console.log(store.getState())
    // }

    render() {
        return (
            <div>
                {/*<h1 onClick={this.getUsername}>Get User</h1>*/}
                <div className="container">
                    <div className="row quiz_content">
                        <div className="col-lg-6 m-auto">

                            <div className="card border-light mb-3">
                                <div className="card-header score_card quiz_card">Score</div>
                                <div className="card-body quiz_card">

                                    <h2>Quiz Finished</h2>
                                    <p className="card-text">You get {this.state.score} of 20 Point in this Quiz.</p>

                                    <span className="badge badge-success score-badge">{this.state.trueA} True</span>
                                    <span className="badge badge-danger score-badge">{this.state.falseA} False</span>

                                    <div>
                                        <Link className="btn btn-primary quiz_next_button" to="/">Finish</Link>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Score);