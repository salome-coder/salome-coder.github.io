var nickname= "";
function typeTexts(id) {
    if (typeof id === "object" ) {
        for(let i=0; i<id.length;i++){
           typeTexts(id[i]);
        }
    } else if (typeof id === "string") {
        let el = document.getElementById(id);
        let txt = el.innerText;
        el.innerHTML = "";
        el.classList.add('show');
        new TypeIt(el, {
            strings: txt
        }).go().destroy();
    }

}
  function showSection  (targetId, sourceId) {
    document.getElementById(targetId).classList.add('show');
    document.getElementById(sourceId).classList.remove('show');
}
function savename (el){
    nickname=el.innerHTML;
    document.getElementById("nickname1").innerHTML="ოე "+nickname;
    showSection('s3', 's2')
}

const letterText = document.getElementById('letter-text');
letterText.addEventListener('input', function (ev) {
   let words = this.value.split(' ');
   if (words.length > 10) this.value = words.slice(0, 9).join(' ');
});
letterText.addEventListener('keypress', function (ev) {
    if (ev.key==="Enter"){
        showSection('letter', 's3')
    }

});
const imgButtons = document.getElementsByClassName('img-btn');
for (let i = 0; i < imgButtons.length; i++) {
    imgButtons[i].addEventListener('click', function (event) {
        let images = event.currentTarget.parentNode.children;
        for (let j = 0; j < images.length; j++) {
            if (images[j] !== event.currentTarget) images[j].classList.remove('show');
        }
        event.currentTarget.style.left = "200px";
        event.currentTarget.style.transitionDelay = "0s";
    });
}

/*
const buttons = document.getElementsByClassName('btn');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {
        //   typewriter(document.getElementById(event.currentTarget.dataset.target));
        let id = items[event.currentTarget.id].next;
        new TypeIt("#"+id, {
            strings: items[id].txt
        }).go();
    });
}
const imgButtons = document.getElementsByClassName('img-btn');
for (let i = 0; i < imgButtons.length; i++) {
    imgButtons[i].addEventListener('click', function (event) {
        let images = event.currentTarget.parentNode.children;
        for (let j = 0; j < images.length; j++) {
            if (images[j] !== event.currentTarget) images[j].classList.remove('show');
        }
        event.currentTarget.style.left = "200px";
        event.currentTarget.style.transitionDelay = "1s";
    });
}
const typewriter = function (el) {
    let txt = el.innerText;
    el.innerHTML = '';
    el.classList.add('show');
    let i = 0;

    function writeChart() {
        el.innerHTML += txt.charAt(i);
        i++;
        setTimeout(writeChart, 80);
    };
    writeChart();
}

const showSection = function (targetId, sourceId) {
    document.getElementById(targetId).classList.add('show');
    document.getElementById(sourceId).classList.remove('show');
}

 */