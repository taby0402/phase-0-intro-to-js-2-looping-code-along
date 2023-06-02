function writeCards(stringArray, eventName) {
    let messages = [];
    for (let i = 0; i < stringArray.length; i++) {
messages.push(`Thank you, ${stringArray[i]}, for the wonderful ${eventName} gift!`);
}
    return messages;
}
function countDown(down) {
while (down >= 0) {
    console.log(down--);
}
}