const addItem = () => {
    let list = document.getElementById('list');
    let textBox = document.getElementById('textBox');
    let item = document.createElement('li');
    list.setAttribute('id', textBox.value);
    list.appendChild(document.createTextNode(textBox.value));
    item.appendChild(item);
}


