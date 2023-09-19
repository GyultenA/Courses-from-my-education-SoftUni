function rotateArray(arr, rotations) {

    for (let i = 0; i < rotations % arr.length; i++) {
        arr.unshift(arr.pop());
    }

    return arr.join(' ');
}