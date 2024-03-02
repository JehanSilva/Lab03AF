const greet = name => {
    return "Hello, ${name}";
}

function newGreet(greet) {
    console.log(greet);
}

newGreet(greet);