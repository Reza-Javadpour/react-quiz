export const registration = (state = [] , action) => {
    switch (action.type) {
        case 'SUBMIT_USER':
            return [
                ...state, {
                    fullname: action.fullname
                }
            ];
        default:
            return state;
    }
};