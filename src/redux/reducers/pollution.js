import { SET_POLLUTION_DATA } from '../actions/pollution'

const initialPullutionData = []

export default (state = initialPullutionData, action) => {
    switch (action.type) {
        case SET_POLLUTION_DATA:
            return state;
            break;

        default:
            return state;
            break;
    }

}


