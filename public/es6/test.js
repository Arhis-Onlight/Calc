'use strict'
// Средство es6: блок левых объявлений
const sentences = [
    {subject: 'Programming', verb: 'is', object: 'great'},
    {subject: 'Dogs', verb: 'are', object: 'wonderful'},
]

// Средство es6: диструктиризация объекта
function say ({subject, verb, object}) {
// Средство es6: строки шаблона
    console.log(`${subject}${verb}${object}`)
}
// Средство es6: for .. of
for (let s of sentences) {
    say(s)
}
