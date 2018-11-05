import React, {Component} from 'react';
import {Link} from "react-router-dom";

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row home_content">
                    <div className="col-lg-6 m-auto">

                        <h2>About React Quiz</h2>

                        <p>This is a prototype web-based online test. There may be some problems.</p>
                        <p>React, Redux & Bootstrap technologies are used in this project.</p>
                        <p>You can clone & develop React Quiz in Github.</p>
                        <Link className="btn btn-secondary quiz_next_button" to="/">Back</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;