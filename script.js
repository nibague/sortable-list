const draggable_list = document.getElementById("draggable-list")
const check = document.getElementById("check");

const topCurrencies = [
    'BTC-USD',
    'ETH-USD',
    'USDT-USD',
    'USDC-USD',
    'BNB-USD',
    'BUSD-USD',
    'ADA-USD',
    'XRP-USD',
    'SOL-USD',
    'DOGE-USD',
]

const listItems = [];

let dragStartIndex;

createList()

function createList(){
    [...topCurrencies]
    .map(a=> ({value: a, sort: Math.random() }))
    .sort((a,b)=> a.sort -b.sort)
    .map(a=> a.value)
    .forEach((coins, index)=>{
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable = "true">
            <p class="coin-name">${coins}</p>
            <i class="fa-solid fa-grip-lines"></i>
        </div>
        `;
        listItems.push(listItem);
        draggable_list.appendChild(listItem);
    });

    addEventListener()
};

function dragStart(){
    //console.log('Event:', 'dragStart');
    dragStartIndex = +this.closest('li').getAttribute('data-index');
    console.log(dragStartIndex)
}
function dragEnter(){
    //console.log('Event:', 'dragEnter');
    this.classList.add('over');
}
function dragLeave(){
    //console.log('Event:', 'dragLeave');
    this.classList.remove('over');
}
function dragOver(e){
    //console.log('Event:', 'dragOver');
    e.preventDefault();
}
function dragDrop(){
    //console.log('Event:', 'dragDrop');
    const dragEndIndex = +this.getAttribute('data-index');

    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove('over');
}

function swapItems(fromIndex, toIndex){
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}

function checkOrder(){
    listItems.forEach((listItem, index)=>{
        const coinName = listItem.querySelector('.draggable').innerText.trim();
        if(coinName !== topCurrencies[index]){
            listItem.classList.add('wrong');
        }else{
            listItem.classList.remove('wrong')
            listItem.classList.add('right')
        }
    })
}


function addEventListener(){
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable =>{
        draggable.addEventListener('dragstart', dragStart);
    });

    dragListItems.forEach(item=> {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    });
};

check.addEventListener('click', checkOrder);
