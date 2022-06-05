const OneFunc = () => {
const addFunc = document.createElement('h1')
addFunc.textContent = "Работа с DOM"
document.body.prepend(addFunc)
};


const TwoFunc = () => {
    const el = document.getElementById("main")
    el.insertAdjacentHTML("beforeend", "<a href ='https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model/Introduction'>Ссылка на статью о DOM</a>")
  };



const ChangeColor = (color) => {
document.body.style.background = color;

};


const TextFunc = (text) => {
const list = document.getElementById('list')
const li = document.createElement('li')
list.appendChild(li)
li.append(text)
};



const DeleteFunc = () => {
const copyright = document.getElementById('copyright')
copyright.remove()
};











console.log(OneFunc());
console.log(TwoFunc());
console.log(ChangeColor('yellow'));
console.log(TextFunc('Пасхалка для Рамзана'));
console.log(DeleteFunc());