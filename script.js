const draggable_list = document.getElementById("draggable-list")
const check = document.getElementById("check");

const topCurriencies = [
    'BTC-USD',
    'ETH-USD',
    'USDT-USD',
    'USDC-USD',
    'BNB-USD',
    'BUSD-USD',
    'ADA-USD',
    'XRP-USD',
    'SOL-USD',
    'DOGE-USD'
]

const listItems = [];
let dragStartIndex;

createList();

function createList(){
    [...topCurriencies].forEach((coins, index)=>{
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);
        listItem.innerHTML = `
        <span class="number">${index + 1}</span>
            <div class="dragable dragable = true">
                <p class="coin-name">${coins}</p> 
                <i class="fa-solid fa-grip-lines"></i>
            </div>
        `;

        listItems.push(listItem);
        draggable_list.appendChild(listItem);

    })
}