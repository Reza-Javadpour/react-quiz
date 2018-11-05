export const registration = (state = [] , action) => {
    switch (action.type) {
        case 'SUBMIT_USER':
            return [
                ...state, {
                    fullname: action.fullname
                }
            ]
        case 'GET_FULLNAME':
            // console.log(action.fullname);
            // console.log(action.id);
            // return state.map(aaa => {
                    // console.log(aaa.fullname);
            // console.log(state[0].fullname);
            console.log('aaaaaaaaaaaaaaaaaaaaaaa');
                    return null;
                // })

        default:
            return state;
    }
}