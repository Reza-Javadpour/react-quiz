//  Action :

import * as types from "../constants/actionTypes";

export const registerUser = fullname => ({
    type : 'SUBMIT_USER',
    fullname
});

export const getUser = id => ({
    type : 'GET_FULLNAME',
    id
});

export const receiveQuestions = questions => ({
    type : types.RECEIVE_QUESTIONS ,
    questions
});

export const setScore = userScore => ({
    type : 'SET_SCORE',
    userScore
});
