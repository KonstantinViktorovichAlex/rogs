const bigPic = document.getElementsByClassName('big_img')[0];
const smallImg = document.getElementsByClassName('small_img');

function init () {
    for(let i = 0; i < smallImg.length; i++){
        smallImg[i].addEventListener('click', changeBigPic);
        
    }
    
}

function changeBigPic (event) {
    let = eventElement = event.target;

    let src = eventElement.getAttribute('src');
    
    bigPic.src = src;
}


init();
