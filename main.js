let  btn = document.querySelector('.todobtn');
let input = document.querySelector('.input');
let ul = document.querySelector('.list');
btn.addEventListener('click', addTask);
function addTask(e){
 e.preventDefault();
 let li = document.createElement('li');
 li.className = 'todo';
 let div = document.createElement('div');
 div.className = 'item';
 div.innerHTML = input.value;
 let combtn = document.createElement('button');
 combtn.className = 'complete';
 combtn.innerHTML = '<i class="fas fa-check"></i>';
 let delbtn = document.createElement('button');
 delbtn.className = 'delete';
 delbtn.innerHTML = '<i class="fas fa-trash"></i>';
 li.appendChild(div);
 li.appendChild(combtn);
 li.appendChild(delbtn);
ul.appendChild(li);
input.value = '';
}