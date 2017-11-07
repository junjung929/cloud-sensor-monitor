export default function(state = null, action) {
    switch(action.type) {
        case 'BED_SELECTED':
            return action.payload;
    }
    return state;
}