//  Action :

import * as types from "../constants/actionTypes";

export const registerUser = (fullname,email) => ({
    type : 'SUBMIT_USER',
    fullname,
    email
});

export const receiveQuestions = questions => ({
    type : types.RECEIVE_QUESTIONS ,
    questions
});

export const setScore = userScore => ({
    type : 'SET_SCORE',
    userScore
});
