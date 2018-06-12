var chatForm = document.forms.chatForm;

if (chatForm) {
    var chatUserName = document.querySelector('#chat-username');
    var chatMessage = document.querySelector('#chat-message');

    chatForm.addEventListener('submit', function (event) {
        event.preventDefault();
        showMessage({
            userName: chatUserName.value,
            message: chatMessage.value,
        });
        chatMessage.value = '';
        chatMessage.focus();
    });
}

function showMessage(data) {
    var chatDisplay = document.querySelector('.chat-Display');
    var newMessage = document.createElement('p');
    newMessage.className = 'bg-sucess chat-text';
    newMessage.innerHTML = '<strong>' + data.username + '</strong>;' + data.message;
    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);

}