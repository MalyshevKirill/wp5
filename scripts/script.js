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
        child.innerHTML = `<p class="m-0 p-0">${key}</p><div class="controls fs-2 d-flex align-items-center justify-content-between"><button class="d-flex justify-content-center align-items-center border-0 bg-danger text-white purchButton" onclick=addItem(this)>+</button><span class="purchCount bg-danger text-white d-flex justify-content-center align-items-center ">${cart[key]}</span><button class="d-flex justify-content-center align-items-center border-0 bg-danger text-white purchButton" onclick=removeItem(this)>-</button></div>`
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
    }
}

const addItem = (item, cart = Object.assign({}, localStorage)) => {
    item = item.parentNode.parentNode.name;
    cart[item]++
    fillLocalStorage(cart)
}

const addNewItem = (item) => {
    localStorage.setItem(item, 1)
}

if(document.getElementById('purchases')) {
    fillCart(Object.assign({}, localStorage))
}
