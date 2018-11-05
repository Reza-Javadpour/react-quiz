import React, {Component} from 'react';
import {connect} from "react-redux";
import QuestionList from "../QuestionList";
import quizApi from "../../api/quizApi";
import {receiveQuestions} from "../../actions";


class Quiz extends Component {

    componentWillMount() {
        quizApi.getQuestions((questions) => this.props.receiveQuestions(questions) );
    }

    render() {
        const { qKey = '0' } = this.props;
        return (
            <div>
                <QuestionList qKey={qKey}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    receiveQuestions : questions => dispatch(receiveQuestions(questions))
})

export default connect(null , mapDispatchToProps)(Quiz);