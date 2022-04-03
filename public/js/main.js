const socket = io.connect();


function render(data) {
    let date=  new Date().toLocaleString()

    const html = data.map((elem, index) => {
        return(`<div class="d-flex">
            <strong style="color: blue">${elem.author}</strong>:
            <div>${date}</div>
            <em style="color: green">${elem.text}</em> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}


socket.on('messages', function(data) { render(data); });

function addMessage(e) {
    const mensaje = {
        author: document.getElementById('username').value,
        text: document.getElementById('texto').value
    };
    socket.emit('new-message', mensaje);
    return false;
}

