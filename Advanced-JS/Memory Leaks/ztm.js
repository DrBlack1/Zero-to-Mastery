let array = [];
for (let i = 5; i > 1; i++) {
    array.push(i-1)
}

//Memory Leak

// Global Variable
var a = 1;
var b = 1;
var c = 1;

// Event Listeners
var element = document.getElementById('button');
element.addEventListener('click', onClick)

// setInterval
setInterval(() => {
    //referencing objects
})