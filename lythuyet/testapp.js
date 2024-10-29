// React
const divReact = React.createElement(
   'div',{
     className: 'post-item',
   },
   React.createElement('h2', {className: 'post-item'}, 'Học ReactJS'),
   React.createElement('p', null, 'Học ReactJS từ cơ bản đến nâng cao')
 )
console.log(divReact);


//vd2:
const ulReact = React.createElement(
   'ul',
   null,
   {
      id: 'id-ul',
      style: 'color: red'
   },
   React.createElement('li',null,{
      id: 'li1',
      style: 'color: red'
   },'JScript'),
   React.createElement('li', null, 'ReactJS'),
)

console.log(ulReact)
//DOM
const root = document.getElementById('root');

const h1 = document.createElement('h1');
h1.className = 'hi';
h1.textContent = 'jdfkdjdkfjdfkdjfdkfd';
root.appendChild(h1);

const h2 = document.createElement('h2')
h2.title = 'h2dom'
h2.className = 'h2class'
h2.innerText = 'đây là h2 dùng DOM'

document.body.appendChild(h2);

console.dir(h2);

//vd2:
const ulDom = document.createElement('ul')
const liDom1 = document.createElement('li')
liDom1.innerText = 'day là li 1'
const liDom2 = document.createElement('li')
liDom2.innerText = 'day là li 2'

ulDom.appendChild(liDom1)
ulDom.appendChild(liDom2)

document.body.appendChild(ulDom)

console.log(ulDom)


//React-DOM

