import _questions from './quiz.json';

export default {
    getQuestions : (cb) => setTimeout(() => cb(_questions), 0)
}