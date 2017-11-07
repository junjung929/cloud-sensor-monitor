export function selectFloor(floor) {
    console.log('A floor has been selected: ', floor.number);
    return {
        type: 'FLOOR_SELECTED',
        payload: floor
    };
}
export function selectRoom(room) {
    console.log('A room has been selected: ', room.number);
    return {
        type: 'ROOM_SELECTED',
        payload: room
    };
}
export function selectBed(bed) {
    console.log('Floor:', bed.floor,", Room number: ", bed.room ,", Bed number:", bed.number);
    return {
        type: 'BED_SELECTED',
        payload: bed
    };
}