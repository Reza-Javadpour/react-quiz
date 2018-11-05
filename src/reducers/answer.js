export const answer = (state = [] , action) => {
    switch (action.type) {
        case "SET_SCORE":
            return [
                ...state, {
                    userScore: action.userScore
                }
            ];
        default:
            return state;
    }
};