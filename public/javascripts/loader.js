function replacePathOfAllImages(imgPath, newPath) {
    let images = document.getElementsByClassName(imgPath);

    for (var i = 0; i < images.length; i++) {
        images[i].src = newPath;
    }
}

function reloadImage(imgPath) {
    replacePathOfAllImages(imgPath, "./images/loading.gif");

    //set the timeout to wait 2 seconds before replace the image
    setTimeout(function () { replacePathOfAllImages(imgPath, imgPath); }, 2000);
}

function loadImage_every10Seconds(imgPath) {
    window.setInterval(function () { reloadImage(imgPath) }, 10000);
}

function loadImages() {
    const imgPaths = ['./images/r1.png', './images/r2.png', './images/r3.png',
        './images/r4.png', './images/r5.png', './images/r6.jpg',
        './images/r7.png', './images/r8.png', './images/r9.png', './images/r10.png'];
    
    for (let i = 0; i < imgPaths.length; i++) {
        loadImage_every10Seconds(imgPaths[i]);
    }
}

loadImages();