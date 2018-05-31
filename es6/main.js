function test () {
    document.getElementById("testy").style.backgroundColor = "rgb(250, 232, 215)";
}

function testTwo() {
    document.getElementById("testy").style.backgroundColor = "burlywood";
}

function destruct() {
    const obj = {first: "one", second: "two"};
    const {first} = obj;
    return first;
}

console.log(destruct());
