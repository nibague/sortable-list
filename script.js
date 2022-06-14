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
};