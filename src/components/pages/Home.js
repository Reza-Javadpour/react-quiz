import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row home_content">
                    <div className="col-lg-6 m-auto">

                        <h2>Quiz Rules</h2>

                        <p>Your quiz should have 10 questions with four options as answers. only
                            one these four are correct.</p>
                        <p>Each question should be answered within 8 seconds. If you fail to
                            answer the question within the time limit the correct answer will be
                            revealed automatically</p>
                        <p>At the end of the quiz the your score will be shown to you. For
                            each correct answer two point should be awarded and for each wrong
                            answer one point should be deducted.</p>
                        <Link className="btn btn-success intro_submit_button" to="/registration">Start Quiz</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;