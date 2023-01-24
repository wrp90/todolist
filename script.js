const addItem = () => {
    let list = document.getElementById('dynamicList');
    let textBox = document.getElementById('textBox');
    let item = document.createElement('li');
    item.setAttribute('id', textBox.value);
    item.appendChild(document.createTextNode(textBox.value));
    list.appendChild(item);
}

const removeItem = () => {
    let list = document.getElementById('dynamicList');
    let textBox = document.getElementById('textBox');
    let item = document.getElementById(textBox.value);
    list.removeChild(item);
}
