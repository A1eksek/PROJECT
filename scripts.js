var scoreH1 = document.getElementById('score_h1');
var HomeButton = document.getElementById('Home_butt');
var score = 10000 ;
var doubleClick = document.getElementById('double_click')
var upgrade_but = document.getElementById('upgrade_bottom')
var upgrade0 = 1;
var lvlclick = 0;
var lvlclick_x2 = 0;
var lvlclick_auto_click = 0;
var upgrade_p = document.getElementById('upgradeP');
var h2lvlcoin = document.getElementById('h2_lvlcoin');
var sum_up = 50;
var p_sum_up = document.getElementById('sum_up_p');
var sum_up_x2 = 1000;
var up_but_x2 = document.getElementById('upgrade_bottom_X2');
var p_but_x2 = document.getElementById('upgradeP_X2');
var p_sum_up_x2 = document.getElementById('sum_up_p_X2');
var time_up_x2 = document.getElementById('h2_time_x2');


document.addEventListener('keydown', function(event){
    if(event.keyCode == 13) { // Исправление здесь
        HomeButton.blur();
    }
});

 
upgrade_but.addEventListener('click', function(){
    if(score < sum_up){
        alert("Недостаточно coins");
    }
    else{
        score = score - sum_up;
        upgrade0 = upgrade0 + 1;
        lvlclick++;
        sum_up = sum_up + 100;
        upgrade_p.textContent = 'Уровень: '+ lvlclick;
        h2lvlcoin.textContent = 'Coin за клик: +'+ upgrade0;
        scoreH1.textContent ='Счётчик coins: ' + score;
        p_sum_up.textContent = 'Стоимость прокачки: ' + sum_up;
    }
})


HomeButton.addEventListener('click', function(){
    score = score + upgrade0;
    scoreH1.textContent ='Счётчик coins: ' + score;
})

up_but_x2.addEventListener('click', function(){
    if ( score < sum_up_x2){
        alert('Нехватает coins')
    }
    else{
        up_but_x2.disabled = true;
        upgrade_but.disabled = true;
        score = score - sum_up_x2;
        lvlclick_x2++;
        upgrade0 = upgrade0 * 2;
        sum_up_x2 = sum_up_x2 + 1000;
        p_but_x2.textContent = 'Уровень: '+ lvlclick_x2;
        h2lvlcoin.textContent = 'Coin за клик: +'+ upgrade0;
        scoreH1.textContent ='Счётчик coins: ' + score;
        p_sum_up_x2.textContent = 'Стоимость прокачки: ' + sum_up_x2;
        setTimeout(function() {
            upgrade0 = upgrade0 / 2;
            h2lvlcoin.textContent = 'Coin за клик: +' + upgrade0;
            up_but_x2.disabled = false;
            upgrade_but.disabled = false;
        }, 60000);  
    }
});

var button_auto_click = document.getElementById('but_auto_click');
var sum_auto_click = 10000;
let autoClickInterval;

button_auto_click.addEventListener('click', function(){
    if (score < sum_auto_click) {
        alert('Не хватает coins');
    } else {
        score = score - sum_auto_click;
        button_auto_click.disabled = true;
        // Запускаем интервал, если он еще не запущен
        if (!autoClickInterval) {
            autoClickInterval = setInterval(function() {
                HomeButton.click();
            }, 1000); // каждую секунду
        }
    }
});

let autoClickInterval1;
var but_charon_baby = document.getElementById("charon_baby_button");
var p_charon_baby = document.getElementById("charon_baby_P");
var lvl_charon_baby = 0;
var charon_baby_sum = document.getElementById("sum_charon_baby_p");
var sum_charon_baby = 200;
var click_baby_charon = 0;
var plus_click = document.getElementById("click_plus");
var click_korm = 0;
but_charon_baby.addEventListener('click', function(){
    if (score < sum_charon_baby) {
        alert('Не хватает coins');
    } else {
        score = score - sum_charon_baby;
        lvl_charon_baby++;
        sum_charon_baby = sum_charon_baby + 100;
        click_korm++;
        click_baby_charon++;
        p_charon_baby.textContent = "Уровень: " + lvl_charon_baby;
        charon_baby_sum.textContent = "Стоимость прокачки: " + sum_charon_baby;
        scoreH1.textContent ='Счётчик coins: ' + score;
        plus_click.textContent = '+' + click_korm + ' coins в секунду';
            // Запускаем интервал, если он еще не запущен
        if (!autoClickInterval1) {
            autoClickInterval1 = setInterval(function() {
                score = score + click_baby_charon;
                scoreH1.textContent ='Счётчик coins: ' + score;
            }, 1000); // каждую секунду
        }
    }
});

var but_mouse = document.getElementById("mouse_but");
var P_mouse = document.getElementById("mouse_P");
var p_sum_mouse = document.getElementById("sum_mouse_p");
var mouse_click = document.getElementById("click_mouse");
var lvl_mouse = 0;
var sum_mouse = 500;
var plus_click_mouse = 0;
var click_mouse = 0;
let autoClickInterval2;

but_mouse.addEventListener("click", function(){
    if (score < sum_mouse) {
        alert('Не хватает coins')
    }
    else{
        score = score - sum_mouse;
        lvl_mouse++;
        sum_mouse +=200;
        plus_click_mouse += 5;
        click_mouse += 5;
        P_mouse.textContent = "Уровень: " + lvl_mouse;
        p_sum_mouse.textContent = "Стоимость прокачки: " + sum_mouse;
        scoreH1.textContent ='Счётчик coins: ' + score;
        mouse_click.textContent = '+' + plus_click_mouse + ' coins в секунду';
        if (!autoClickInterval2) {
            autoClickInterval2 = setInterval(function() {
                score = score + click_mouse;
                scoreH1.textContent ='Счётчик coins: ' + score;
            }, 1000); // каждую секунду
        }
    }
});


var but_lotok = document.getElementById("lotok_button");
var P_lotok = document.getElementById("lotok_P");
var p_sum_lotok = document.getElementById("sum_lotok");
var lotok_click = document.getElementById("click_lotok");
var lvl_lotok = 0;
var sum_lotok = 800;
var plus_click_lotok = 0;
var click_lotok = 0;
let autoClickInterval3;

but_lotok.addEventListener("click", function(){
    if (score < sum_lotok) {
        alert('Не хватает coins')
    }
    else{
        score = score - sum_lotok;
        lvl_lotok++;
        sum_lotok +=300;
        plus_click_lotok += 10;
        click_lotok += 10;
        P_lotok.textContent = "Уровень: " + lvl_lotok;
        p_sum_lotok.textContent = "Стоимость прокачки: " + sum_lotok;
        scoreH1.textContent ='Счётчик coins: ' + score;
        lotok_click.textContent = '+' + plus_click_lotok + ' coins в секунду';
        if (!autoClickInterval3) {
            autoClickInterval3 = setInterval(function() {
                score = score + click_lotok;
                scoreH1.textContent ='Счётчик coins: ' + score;
            }, 1000); // каждую секунду
        }
    }
});
