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
    console.log('Event:', 'dragStart');
}
function dragEnter(){
    console.log('Event:', 'dragEnter');
}
function dragLeave(){
    console.log('Event:', 'dragLeave');
}
function dragOver(){
    console.log('Event:', 'dragOver');
}
function dragDrop(){
    console.log('Event:', 'dragDrop');
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