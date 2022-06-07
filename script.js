'use strict';

// alert('Приветствую Юный падаван!')
var userTempate = {
    name: undefined,
    surname: undefined,
    age: undefined,
    email: undefined,
    password: undefined
};

var users = [
    {
        name: 'admin',
        surname: 'admin',
        age: 99,
        email: 'admin',
        password: 'admin'
    },
    {
        name: 1,
        surname: 2,
        age: 3,
        email: '1',
        password: '1'
    }
];

var registration = function(){
    var newUser = {};
    for (var key in userTempate) {
        switch (key) {
            case 'name':
                newUser.name = prompt('Впиши имя своё');
                break;
            case 'surname':
                newUser.surname = prompt('Впиши фамилию свою');
                break;
            case 'age':
                newUser.age = prompt('Лет тебе сколько?');
                break;
            case 'email':
                newUser.email = prompt('Адрес электронной почты');
                break;
            case 'password':
                newUser.password = prompt('Придумай пароль');
                break;
            default:
                confirm('Желаешь ли ты продолжить?') ? menu() : alert('До свидания');
                break;
        }
    }

    users.push(newUser);
    confirm('Желаешь ли ты продолжить?') ? menu() : alert('До свидания');
};

var showUser = function(user){
    for (var key in user){
        console.log('['+key+']:' + ' ' + user[key]);
    }
    console.log('-------------------------------');
};

var autorization = function(){
    var mail = prompt('Введи имейл свой');
    var pass = prompt('Теперь пароль');

    users.forEach(function(user){
        if(mail === user.email) {
            if(pass === user.password) {
                showUser(user);
            } else {
                alert('Нет такого сочетания!');
                confirm('Желаешь ли повторить?') ? autorization() : alert('До свидания');
            }
        } 
    })
    confirm('Желаешь ли ты продолжить?') ? menu() : alert('До свидания');
};

var userList = function() {
    users.forEach(function(user){
        showUser(user);
    });
    confirm('Желаешь ли ты продолжить?') ? menu() : alert('До свидания');
}

var userChangeAction = function(user) {
    var choise = prompt(
        'Выбери какое свойство хочешь изменить \n' +
        'a) Имя \n' + 
        'b) Фамилию \n' +
        'c) Возраст\n' +
        'd) Имейл\n' + 
        'e) Пароль\n' +
        'q) Выйти'
    )
    
    switch (choise) {
        case 'a':
            user.name = prompt('Впиши имя своё');;
            break;
        case 'b':
            user.surname = prompt('Впиши фамилию свою');
            break;
        case 'c':
            user.age = prompt('Лет тебе сколько?');
            break;
        case 'd':
            user.email = prompt('Адрес электронной почты');
            break;
        case 'e':
            user.password = prompt('Придумай пароль');
            break;
        case 'q':
            alert('Прощай мой юный падаван!');
            break;
        default:
            alert('Падаван, кажется ты не отличаешься умом, постарайся лучше');
            menu();
            break;
    }

    showUser(user);
    confirm('Желаешь ли еще что то поменять?') ? userChangeAction(user) : alert('В меню');
}

var userChange = function() {
    alert('Для изменения данных надо авторизоваться!');
    var mail = prompt('Введи имейл свой');
    var pass = prompt('Теперь пароль');

    users.forEach(function(user){
        if(mail === user.email) {
            if(pass === user.password) {
                userChangeAction(user);
            } else {
                alert('Нет такого сочетания!');
                confirm('Желаешь ли повторить?') ? autorization() : alert('Меню');
            }
        } 
    })
    confirm('Желаешь ли ты продолжить?') ? menu() : alert('До свидания');
}

var menu = function() {
    var userChoice = prompt(
        'Выбирай свой путь на темную сторону: \n' +
        'a) Зарегистрируйся \n' + 
        'b) Авторизуйся\n' +
        'c) Посмотри список сторонников\n' +
        'd) Измени свои данные\n' + 
        'q) Уйди и не возвращайся'
    )
    
    switch (userChoice) {
        case 'a':
            registration();
            break;
        case 'b':
            autorization();
            break;
        case 'c':
            userList();
            break;
        case 'd':
            userChange();
            break;
        case 'q':
            alert('Прощай мой юный падаван!');
            break;
        default:
            alert('Падаван, кажется ты не отличаешься умом, постарайся лучше');
            menu();
            break;
    }
}
menu();




// console.log('[users]', users);