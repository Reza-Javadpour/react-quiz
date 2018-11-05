import React, {Component} from 'react';
import {connect} from "react-redux";
import QuestionItem from "./QuestionItem";

class QuestionList extends Component {

    render() {
        const { questions , qKey , trueA , falseA } = this.props;
        return (
            <div>
                <div>
                    {/*{console.log(qKey)}*/}
                    {/*{questions.map(question =>*/}
                        {/*<QuestionItem key={question.id} question={question} />*/}
                    {/*)}*/}
                    <QuestionItem question={questions[qKey]} trueA={trueA} falseA={falseA} />


                </div>



            </div>
        );
    }
}

const getQuestions = questions => Object.keys(questions).map(id => questions[id]);

const mapStateToProps = state => {
    return {
        questions : getQuestions(state.questions)
    }
};

export default connect(mapStateToProps)(QuestionList);