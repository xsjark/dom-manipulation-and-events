const container = document.querySelector('#container')

// a div with classes with text to container
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”
const text = document.createElement('p');
text.classList.add('red');
text.textContent = 'Hey I’m red';

container.appendChild(text);

// an <h3> with blue text that says “I’m a blue h3!”
const header = document.createElement('h3');
header.classList.add('blue');
header.textContent = 'Hey I’m a blue h3';

container.appendChild(header);

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
const pinkDiv = document.createElement('div');
pinkDiv.classList.add('pink');

const pinkDivHeader = document.createElement('h1');
pinkDivHeader.textContent = 'I\'m in a div';

pinkDiv.appendChild(pinkDivHeader);

const pinkDivText = document.createElement('p');
pinkDivText.textContent = 'ME TOO!';

pinkDiv.appendChild(pinkDivText);
container.appendChild(pinkDiv)



