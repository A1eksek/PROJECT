var scoreH1 = document.getElementById('score_h1');
var HomeButton = document.getElementById('Home_butt');
var score = 0 ;
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