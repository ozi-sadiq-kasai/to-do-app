let form = document.querySelector('#input-submit');
let itemList = document.getElementById('duties');
let newInput = document.querySelector('#submit-input');
let filter = document.querySelector('#search-input');



form.addEventListener('submit',addItem);
itemList.addEventListener('click',removetask)
// add Item
function addItem(e){
e.preventDefault();
let li = document.createElement('li');
li.className = 'toDo'
li.appendChild(document.createTextNode(newInput.value));

// button
let delButton = document.createElement('button');
delButton.className = "del-button";
delButton.textContent='x'
li.appendChild(delButton)

// append li to ul
itemList.appendChild(li);
newInput.value=" ";
}

function removetask(e){
  if(e.target.classList.contains("del-button")){
  let li= e.target.parentElement;
  itemList.removeChild(li)
  }
}
filter.addEventListener('keyup',search)
// filter function
function search(e){
 let text= e.target.value.toLowerCase();
 let items = itemList.getElementsByTagName('li');

 Array.from(items).forEach(function(item){
  let itemName = item.firstChild.textContent;
  if(itemName.toLowerCase().indexOf(text)!= -1){
    item.style.display='block';
  }else{
    item.style.display = 'none'
  }
 })

}