const socket = io();
const chatForm = document.getElementById('chat-form');
const chatBox = document.getElementById('messages');




function OthersMessageForm(nickname,message){
    var HTML = '<div>'+nickname+'</div><div class = "others-message-wrapper">'+message+"</div>";
    
    return HTML;
}

function NowTime(){
    const date = new Date();

    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const timeStr = hours + ':' + minutes + ':' + seconds;
    return timeStr;
}
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = e.target.m.value
    // nickname use
    if(message) socket.emit('chat message', OthersMessageForm(nickname,message));
    e.target.m.value = '';
    if(message) chatBox.appendChild(makeMessage(message, false));
})

socket.on('chat message', (message) => {
    if(message) chatBox.appendChild(makeMessage(message, true));
})

const makeMessage = (message, isOthers) => {
    const msgBox = document.createElement('div');
    const classname = isOthers ? "others-message" : "my-message-wrapper";
    msgBox.className = classname;
    msgBox.innerHTML = message;
    return msgBox;
}