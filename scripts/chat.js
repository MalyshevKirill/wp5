const inp = document.getElementById('msgInp')
const msgs = document.getElementById('messages')
inp.onkeydown = e => {
    if(e.code === 'Enter') {
        sendMsg()
    }
}
let lastMsg = ''

const sendMsg = (msg = inp.value) => {
    if(msg.trim() !== '') {
        lastMsg = msg.toLowerCase()
        const newMsg = document.createElement('div')
        newMsg.classList = 'mySide msg'
        newMsg.innerHTML = msg
        msgs.appendChild(newMsg)
        msgs.scrollTop = msgs.scrollHeight
        inp.value = ''
        setTimeout(() => sendAnswer(), 3000)
    }
}

const sendAnswer = () => {
    const newMsg = document.createElement('div');
    newMsg.classList = 'counterSide msg'
    let msgText = '';
    switch (lastMsg) {
        case 'hello':
            msgText = 'Hello visitor. Bot connected to chat.'
            break;
        case 'how to buy a record?':
            msgText = 'Go to the catalog. Select the record you like and click "Add to Cart". Then go to your cart and click "Buy"'
            break;
        case 'bye':
            msgText = 'Goodbye. Thank you for visiting.'
            break;
        default:
            msgText = 'Sorry, i don`t get it.';
    }
    newMsg.innerHTML = msgText
    msgs.appendChild(newMsg)
    msgs.scrollTop = msgs.scrollHeight
}

const fastQst = (msg) => {
    lastMsg = msg
    sendMsg(msg)
}

const openChat = () => msgs.scrollTop = msgs.scrollHeight