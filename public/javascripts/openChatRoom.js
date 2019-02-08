/* Open a new window, which is for the chatting room */
function openNewWindow() {
    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 600 });

    // load the chat.html from html directory.
    win.loadFile('../html/chat.html');
}

/* Add event listeners to image buttons to open a new window when the user click the image. */
function addListenerToOpenChatRoom() {
    const imgPaths = ['./images/r1.png', './images/r2.png', './images/r3.png',
        './images/r4.png', './images/r5.png', './images/r6.jpg',
        './images/r7.png', './images/r8.png', './images/r9.png', './images/r10.png'];
    
    for (let x = 0; x < imgPaths.length; x++) {
        let buttons = document.getElementsByClassName(imgPaths[x]);

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => { openNewWindow() });
        }
    }
}

addListenerToOpenChatRoom();