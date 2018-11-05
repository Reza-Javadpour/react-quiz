export const registration = (state = [] , action) => {
    switch (action.type) {
        case 'SUBMIT_USER':
            return [
                ...state, {
                    fullname: action.fullname,
                    email: action.email
                }
            ];
        default:
            return state;
    }
};