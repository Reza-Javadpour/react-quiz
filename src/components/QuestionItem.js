import React, { Component } from 'react';
import Question from "./Question";

class QuestionItem extends Component {
    render() {
        const { question , trueA , falseA } = this.props;
        return (

            <div >
                <Question {...question} trueA={trueA} falseA={falseA} />
            </div>
        )
    }
}

export default QuestionItem;
