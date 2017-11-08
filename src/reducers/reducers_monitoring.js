import {
    BED_SELECTED,
    ROOM_SELECTED,
    FLOOR_SELECTED,
    CONTENT_SELECTED
} from '../actions/constants';

export default function(state = {bed_selected: null, room_selected: null, floor_selected: null, content_selecded: null}, action) {
    switch(action.type) {
        case 'BED_SELECTED':
            return { ...state, bed_selected: action.payload };
        case 'ROOM_SELECTED':
            return { ...state, room_selected: action.payload };
        case 'FLOOR_SELECTED':
            return { ...state, floor_selected: action.payload };
        case 'CONTENT_SELECTED':
            return { ...state, content_selected: action.payload};
    }
    return state;
}