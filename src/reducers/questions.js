import { RECEIVE_QUESTIONS } from "../constants/actionTypes";

const questions = (state = {} , action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions.reduce((obj , question) => {
                    obj[question.id] = question;
                    return obj;
                }, {})
            };
        default:
            return state;
    }
};

export default questions;