const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
function addItem(e) {
  e.preventDefault()
  console.log('heloo');
  const text = this.querySelector('[name=item]').value;
  console.log(text);
  const item = {
    text,
    done: false
  }
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items',JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], plateList) {
  plateList.innerHTML = plates.map((plate, i) => {
    return (`
      <li>
      <input type='checkbox' data-index=${i} id='iteam${i}' ${plate.done? 'checked':''}/>
        <label for='iteam${i}'>${plate.text}</label>
      </li>
    `)
  }).join('')
}

function toggledone(e){
  if(!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items',JSON.stringify(items));
  populateList(items,itemsList);
}
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggledone);

populateList(items,itemsList);