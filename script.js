const audio1 = document.querySelector(".audio1");
const audio2 = document.querySelector(".audio2");
const ghost1 = document.querySelector(".ghost-2-box");
const ghost2touch = document.querySelector(".ghost-touch");
const ghost2 = document.querySelector(".ghost-3");
const ghost1HAHA = document.querySelector(".ghost-2-talk");
const fullZizizik = document.querySelector(".full-zizizik");
const fullZizizikDiv = document.querySelector(".full-zizizik-div")
const radioBtn = document.querySelector(".section-4-contents-1-item-text-button");
const weaponBtn = document.querySelector(".section-4-contents-2-item-text-button");
const missileBtn = document.querySelector(".section-4-contents-3-item-text-button");
const missile = document.querySelector(".section-4-contents-3");
const boom = document.querySelector(".boom");

audio1.volume = 0.2;
audio1.loop= true;

audio2.volume = 0.2;
audio2.duration = 3000;

ghost1.onclick = function(){
    audio1.play();
    ghost1HAHA.src = "img/talk2.png";
};

function goZizizik(){
    fullZizizik.style.display = "block";
    setTimeout(
        function(){
            fullZizizik.style.display = "none";
        },500
    )
};

setInterval(goZizizik, 12000);

radioBtn.onclick = function(){
    if(audio1.currentTime !== 0){
        setTimeout(function(){
            audio1.pause();
        },4000);
        ghost1HAHA.src = "img/talk1.png";
        audio2.play();
        setTimeout(function(){
            audio1.currentTime =0;
        },4000);
    }else{}
};

weaponBtn.onclick = function(){
    if(weaponBtn.innerText === "장착하기"){
        document.body.style.cursor = "url(img/cursor.png),auto";
        weaponBtn.innerText = "해제하기";
    }else if(weaponBtn.innerText === "해제하기"){
        document.body.style.cursor = "auto";
        weaponBtn.innerText = "장착하기";
    }
};

ghost2touch.onclick = function(){
    if(weaponBtn.innerText === "해제하기"){
        ghost2.src = "img/hitghost.png";
        setTimeout(
            function(){
                ghost2.src = "img/2-귀신.svg";
            },2000
        )
    }else{}
};

missileBtn.onclick = function(){
    boom.style.display = "block";
    setTimeout(
        function(){
            boom.style.display = "none";
        },9000
    );
    fullZizizikDiv.removeChild(fullZizizik);
    missileBtn.innerText = "발사완료";
    missileBtn.style.backgroundColor = "rgba(255,255,255,0.5)";
    setTimeout(
        function(){
            alert("화면이 정상적으로 가동됩니다.");
        },9500
    );
}