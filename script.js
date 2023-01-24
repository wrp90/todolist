const root = document.getElementById('root');

const listElement = document.createElement('ul');

const listItemOne = document.createElement('li');

listItemOne.innerText = 'list item one';


root.append(listElement);

listElement.append(listItemOne)

