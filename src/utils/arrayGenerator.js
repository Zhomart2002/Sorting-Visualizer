export default function generateNewArray(len, min, max) {
    const arr = [];

    for (let i = 0; i < len; i++) arr.push(randomNumber(min, max));

    return arr;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
