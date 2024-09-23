function alertName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    if (name) {
        alert('Hi ' + name + '!');
    } else {
        alert('Please enter your name.');
        nameInput.focus(); 
    }
}
let isBlue = true; 
function changeColor() {
    if (isBlue) {
        document.body.style.backgroundColor = 'yellow';
    }
    else if (isBlue) {
        document.body.style.backgroundColor = 'green';    
    } 
    else if (isBlue) {
        document.body.style.backgroundColor = 'red';    
    }
    else if (isBlue) {
        document.body.style.backgroundColor = 'purple';    
    }
    else if (isBlue) {
        document.body.style.backgroundColor = 'orange';    
    }
    else if (isBlue) {
        document.body.style.backgroundColor = 'pink';    
    }
    else if (isBlue) {
        document.body.style.backgroundColor = 'teal';    
    }
    else if (isBlue) {
        document.body.style.backgroundColor = 'cyan';    
    }
    else if (isBlue) {
        document.body.style.backgroundColor = 'magenta';    
    } else {
        document.body.style.backgroundColor = 'blue';
    }
    isBlue = !isBlue;
}
function validateText() {
    const textInput = document.getElementById('textInput');
    const text = textInput.value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (validation.test(text)) {
        alert('Text contains special characters!');
    } else {
        alert('Text is valid!');
    }
}
function addText() {
    const heading = document.getElementById('mainHeading');
    const additionalText = ' Add Text';
    if (!heading.textContent.includes(additionalText)) {
        heading.textContent += additionalText;
    }
}
