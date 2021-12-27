const fillLocalStorage = (cart) => {
    for(key in cart) {
        localStorage.setItem(key, cart[key])
    }
    fillCart(Object.assign({}, localStorage))
}

const deleteChild = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const fillCart = (cart) => {
    const parent = document.getElementById('purchases')
    deleteChild(parent)
    for(key in cart) {
        const child = document.createElement('div')
        child.classList = ['w-100 bg-white fs-3 d-flex align-items-center item py-3 px-3 justify-content-between']
        child.name = key;
        child.innerHTML = `<p class="m-0 p-0">${key}</p><div class="controls fs-2 d-flex align-items-center justify-content-between">
        <button class="d-flex justify-content-center align-items-center border-0 bg-danger text-white purchButton" onclick=addItem(this)>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
        </button>
        <span class="purchCount bg-danger text-white d-flex justify-content-center align-items-center ">${cart[key]}</span>
        <button class="d-flex justify-content-center align-items-center border-0 bg-danger text-white purchButton" onclick=removeItem(this)>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
        </svg>
        </button>
        <button onclick=removeItemFull(this) class="d-flex justify-content-center align-items-center border-0 bg-danger text-white purchButton">x</button>
        </div>`
        parent.appendChild(child)
    }
}

const removeItem = (item, cart = Object.assign({}, localStorage)) => {
    item = item.parentNode.parentNode.name;
    if(cart[item] > 1) {
        cart[item]--
        fillLocalStorage(cart)
    } else {
        localStorage.removeItem(item)
        fillCart(Object.assign({}, localStorage))
        setCount()
    }
}

const removeItemFull = (item) => {
    localStorage.removeItem(item.parentNode.parentNode.name)
    fillCart(Object.assign({}, localStorage))
    setCount()
}

const addItem = (item, cart = Object.assign({}, localStorage)) => {

    item = item.parentNode.parentNode.name;
    cart[item]++
    fillLocalStorage(cart)
}

const clearCart = () => {
    localStorage.clear()
    fillCart(Object.assign({}, localStorage))
    setCount()
}

const showTooltip = () => {
    const tooltipEl = document.getElementById('tooltip');
    tooltipEl.style.left = '30px'
    setTimeout(() => {
        tooltipEl.style.left = '-300px'
    }, 2000);
}

const addNewItem = (item) => {
    localStorage.setItem(item, 1)
    setCount()
    showTooltip()
}

if(document.getElementById('purchases')) {
    fillCart(Object.assign({}, localStorage))
}
