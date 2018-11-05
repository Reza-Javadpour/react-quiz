import {combineReducers} from 'redux';
import {registration} from "./registration";
import questions from "./questions";
import {answer} from "./answer";

export default combineReducers({
    registration,
    questions,
    answer
});