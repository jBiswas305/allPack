
// for copy image link
let imageLink = document.querySelectorAll('.imageLink');
let imgBtn = document.querySelectorAll('.imgBtn');
for(let i = 0; i < imageLink.length; i++){
    imgBtn[i].onclick = function () {
        imageLink[i].select();
        document.execCommand('Copy');
    }
}

// for copy video link
let videoLink = document.querySelectorAll('.videoLink');
let videoBtn = document.querySelectorAll('.videoBtn');
for(let j = 0; j < videoLink.length; j++){
    videoBtn[j].onclick = function () {
        videoLink[j].select();
        document.execCommand('Copy');
    }
}
