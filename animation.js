document.getElementById('Home_butt').addEventListener('click', function(){
        // Уменьшаем кнопку
        this.style.transform = 'scale(1.1) translateY(-5px)'; // 80% от оригинального размера

        // Возвращаем кнопку в обычное состояние через 200 мс
        setTimeout(() => {
            this.style.transform = 'scale(1) translateY(0)';
        }, 100); 
})

// document.getElementById('hideButton').addEventListener('click', function() {
//     var myDiv = document.getElementById('upgrade');
//     myDiv.classList.add('hidden');
// })

// document.getElementById('showButton').addEventListener('click', function() {
//     var myDiv = document.getElementById('upgrade'); // Получаем элемент div
//     myDiv.classList.remove('hidden'); // Убираем класс moved, чтобы вернуть элемент обратно
// });

document.getElementById('hideButton2').addEventListener('click', function() {
    var myDiv = document.getElementById('pets');
    myDiv.classList.remove('hidden2');
})

document.getElementById('showButton2').addEventListener('click', function() {
    var myDiv = document.getElementById('pets'); // Получаем элемент div
    myDiv.classList.add('hidden2'); // Убираем класс moved, чтобы вернуть элемент обратно
});

document.getElementById('hideButton').addEventListener('click', function() {
    var myDiv = document.getElementById('upgrade');
    myDiv.classList.remove('hidden');
})

document.getElementById('showButton').addEventListener('click', function() {
    var myDiv = document.getElementById('upgrade'); // Получаем элемент div
    myDiv.classList.add('hidden'); // Убираем класс moved, чтобы вернуть элемент обратно
});