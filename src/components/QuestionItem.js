import React, { Component } from 'react';
import Question from "./Question";

class QuestionItem extends Component {
    state = {
        trueAnswer : 0
    }
    render() {
        const { question , trueA , falseA } = this.props;
        // console.log('#Here is QuestionItem Componnent');
        return (

            <div >
                <Question {...question} trueA={trueA} falseA={falseA} />
                {/*{console.log(question)}*/}
            </div>
        )
    }
}

export default QuestionItem;
