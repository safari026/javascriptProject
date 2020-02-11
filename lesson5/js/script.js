let menu = document.querySelector('.menu'),
    item = document.querySelectorAll('.menu-item');
    menu.replaceChild(item[2],item[1]);
    menu.insertBefore(item[1],item[3]);
let quest = prompt('Как вы относитесь к технике  Apple','');
let newLi = document.createElement('li');
    newLi.innerHTML = 'Пятый пункт';
    newLi.classList.add('menu-item');
    menu.appendChild(newLi);
let body = document.getElementsByTagName('body');
    body[0].style.background = 'url(img/apple_true.jpg) center no-repeat';
    let title = document.getElementById('title');
        title.innerHTML = 'Мы продаем только <b>подлинную</b> технику Apple';
        b = document.getElementsByTagName('b')[0].style.color = 'black';
        adver = document.getElementsByClassName('adv')[0];
        adver.remove();
        prompt = document.getElementById('prompt');
        prompt.append(quest);


        
