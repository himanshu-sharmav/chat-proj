// Screen width responsive function
function handleScreenResize() {
    const width = window.innerWidth;
    
    if (width >= 992 && width <= 1600) {
        document.body.style.zoom = "0.9";
    } else if (width >= 700 && width <= 767) {
        document.body.style.zoom = "0.8";
    } else if (width >= 600 && width <= 700) {
        document.body.style.zoom = "0.75";
    } else if (width <= 600) {
        document.body.style.zoom = "0.5";
    } else {
        document.body.style.zoom = "1";
    }
}

// Left menu toggle function
function toggleLeftMenu() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.toggle('active');
}

// Add this function for users list toggle
function toggleUsersList() {
    const content = document.getElementById('usersListContent');
    const icon = document.querySelector('.toggle-icon');
    content.classList.toggle('active');
    icon.classList.toggle('active');
    
    // Store toggle state
    const isActive = content.classList.contains('active');
    localStorage.setItem('usersListOpen', isActive);
}

// Add this function to initialize the users list state
function initializeUsersList() {
    const content = document.getElementById('usersListContent');
    const icon = document.querySelector('.toggle-icon');
    const isOpen = localStorage.getItem('usersListOpen') === 'true';
    
    if (isOpen) {
        content.classList.add('active');
        icon.classList.add('active');
    }
}

// Event listeners
window.addEventListener('resize', handleScreenResize);
window.addEventListener('load', handleScreenResize);

let chatSocket = null;

function connectWebSocket(roomName) {
    const wsScheme = window.location.protocol === 'https:' ? 'wss' : 'ws';
    const host = window.location.host;
    const wsPath = `${wsScheme}://${host}/ws/chat/${roomName}/`;
    chatSocket = new WebSocket(wsPath);

    chatSocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        const currentUserId = document.getElementById('currentUserId').value;
        const messageClass = data.sender_id == currentUserId ? 'sent' : 'received';
        
        const messagesContainer = document.getElementById('messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${messageClass}`;
        messageDiv.innerHTML = `
            <div class="message-content">${data.message}</div>
            <div class="message-time">${new Date().toLocaleTimeString()}</div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    chatSocket.onclose = function(e) {
        console.error('Chat socket closed unexpectedly');
    };
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    
    if (message && chatSocket.readyState === WebSocket.OPEN) {
        const currentUserId = document.getElementById('currentUserId').value;
        const receiverId = document.getElementById('receiverId').value;
        
        chatSocket.send(JSON.stringify({
            'message': message,
            'sender_id': currentUserId,
            'receiver_id': receiverId
        }));
        
        messageInput.value = '';
    }
}

// Add event listener for Enter key in message input
document.querySelector('#messageInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Add to your existing DOMContentLoaded listeners
document.addEventListener('DOMContentLoaded', function() {
    initializeUsersList();
}); 