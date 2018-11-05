import React, { Component } from 'react';
import QuestionList from "./QuestionList";
import Score from "./pages/Score";
import {connect} from "react-redux";

class Question extends Component {

    state ={
        'nextQuestion' : false,
        'completed' : false,
        'trueAnswer' : 0,
        'falseAnswer' : 0,
        'timeoutActive' : true,
        'timeoutCounter' : 0,
        'optionMode' : '',
        'trueItem' : '',
        'falseItem' : '',
        'answered' : false

    };

    componentDidMount(){
        if (this.state.timeoutActive) {
            this.timeout = setTimeout(() => {
                this.timeout = setTimeout(() => {
                    // this.handleNext(this.props.id);
                    if (!this.state.answered){
                        this.handleAnswer(0,1,this.props.id,this.props.trueA,this.props.falseA)
                    }
                    // console.log(this.props.falseA);
                    this.setState({
                       'timeoutCounter' : 'timeoutCounter' + 1
                    });
                }, 2000);
                this.setState({
                    'trueItem' : 'true_item',
                    'falseItem' : 'false_item',
                    'optionMode' : true
                });
            }, 8000);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    handleNext(q) {
        if(q !== 10){
            this.setState({
                'nextQuestion' : true
            });
        }else{
            this.setState({
                'completed' : true,
                'timeoutActive' : false
            });
        }
        document.getElementById("question_card_"+q).classList = document.getElementById("question_card_"+q).classList + " hidden";
    }

    handleAnswer(userAnswer , correctAnswer , id , trueA = 0 , falseA = 0 , optionMode){
        if (!optionMode){
            const _trueA = parseInt(trueA);
            const _falseA = parseInt(falseA);
            if(userAnswer === correctAnswer){
                this.setState({
                    'trueAnswer' : _trueA + 1,
                    'falseAnswer' : _falseA
                });
            }else{

                this.setState({
                    'trueAnswer' : _trueA,
                    'falseAnswer' : _falseA + 1
                });
            }
            this.setState({
               'answered' : true
            });
            this.handleNext(id);
        }
    }


    render() {
        const { id , category , option1, option2, option3, option4 , question , answer , trueA , falseA } = this.props;
        let p = ((id === 0 ? (id+1) : id) * 10);
        const progressPercentage = {
            width: p+'%'
        };
        return (
            <div>
                <div id={"question_card_"+id} className="container">
                    <div className="row quiz_content">
                        <div className="col-lg-6 m-auto">
                            <div className="card border-light mb-3">
                                <div className="card-header quiz_card">{category}</div>
                                <div className="card-body quiz_card">

                                    <span className="badge badge-info">Question {id}</span>
                                    <p className="card-text">{question}</p>

                                    <fieldset>
                                        <div className="form-group">
                                            <div className="custom-control custom-radio quiz_item">
                                                <input type="radio" id={"Q"+id+"_customRadio1"} name="customRadio"
                                                       className="custom-control-input" disabled={this.state.optionMode}/>
                                                <label className={"custom-control-label " + (option1 === answer ? this.state.trueItem : this.state.falseItem)} onClick={() => this.handleAnswer(option1,answer,id,trueA,falseA,this.state.optionMode)} htmlFor={"Q"+id+"_customRadio1"}>{option1}</label>
                                            </div>
                                            <div className="custom-control custom-radio quiz_item">
                                                <input type="radio" id={"Q"+id+"_customRadio2"} name="customRadio"
                                                       className="custom-control-input"  disabled={this.state.optionMode}/>
                                                <label className={"custom-control-label " + (option2 === answer ? this.state.trueItem : this.state.falseItem)} onClick={() => this.handleAnswer(option2,answer,id,trueA,falseA,this.state.optionMode)} htmlFor={"Q"+id+"_customRadio2"}>{option2}</label>
                                            </div>
                                            <div className="custom-control custom-radio quiz_item">
                                                <input type="radio" id={"Q"+id+"_customRadio3"} name="customRadio"
                                                       className="custom-control-input"  disabled={this.state.optionMode}/>
                                                <label className={"custom-control-label " + (option3 === answer ? this.state.trueItem : this.state.falseItem)} onClick={() => this.handleAnswer(option3,answer,id,trueA,falseA,this.state.optionMode)} htmlFor={"Q"+id+"_customRadio3"}>{option3}</label>
                                            </div>
                                            <div className="custom-control custom-radio quiz_item">
                                                <input type="radio" id={"Q"+id+"_customRadio4"} name="customRadio"
                                                       className="custom-control-input"  disabled={this.state.optionMode}/>
                                                <label className={"custom-control-label " + (option4 === answer ? this.state.trueItem : this.state.falseItem)} onClick={() => this.handleAnswer(option4,answer,id,trueA,falseA,this.state.optionMode)} htmlFor={"Q"+id+"_customRadio4"}>{option4}</label>
                                            </div>
                                        </div>
                                    </fieldset>

                                    <div>
                                        <button
                                            className="btn btn-secondary quiz_next_button"
                                            onClick={() => this.handleAnswer(0,1,id,trueA,falseA) }>
                                            Next
                                        </button>
                                    </div>

                                </div>
                                <div className="progress quiz_progress">
                                    <div className="progress-bar bg-success"
                                         role="progressbar"
                                         style={progressPercentage}
                                         aria-valuenow="25"
                                         aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {(this.state.nextQuestion) ? <QuestionList qKey={id} trueA={this.state.trueAnswer} falseA={this.state.falseAnswer}/> : null}

                {(this.state.completed) ? <Score trueA={this.state.trueAnswer} falseA={this.state.falseAnswer}/> : null}

            </div>
        )
    }
}

export default connect()(Question);
