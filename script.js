'use strict';

alert('Приветствую Юный падаван!');
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

    newUser.name = prompt('Впиши имя своё');
    newUser.surname = prompt('Впиши фамилию свою');
    newUser.age = prompt('Лет тебе сколько?');
    newUser.email = prompt('Адрес электронной почты');
    newUser.password = prompt('Придумай пароль');
    // for (var key in userTempate) { //вот такой вот бред насочинял
    //     switch (key) {
    //         case 'name':
    //             newUser.name = prompt('Впиши имя своё');
    //             break;
    //         case 'surname':
    //             newUser.surname = prompt('Впиши фамилию свою');
    //             break;
    //         case 'age':
    //             newUser.age = prompt('Лет тебе сколько?');
    //             break;
    //         case 'email':
    //             newUser.email = prompt('Адрес электронной почты');
    //             break;
    //         case 'password':
    //             newUser.password = prompt('Придумай пароль');
    //             break;
    //         default:
    //             break;
    //     }
    // }

    users.push(newUser);
    alert('Пользователь ' + newUser.name + ' ' + newUser.surname + ' успешно добавлен!')
};

var showUser = function(user){
    if(user) {
        for (var key in user){
            console.log('['+key+']:' + ' ' + user[key]);
        }
        console.log('-------------------------------');
    }
};

var autorization = function(){
    var mail = prompt('Введи имейл');
    var pass = prompt('Теперь пароль');

    var userIndex = users.findIndex(function(user) {
        return pass === user.password && mail === user.email;
    })

    if (userIndex >= 0) {
        return [users[userIndex], userIndex];
    } 
    else {
        alert('Нет такого сочетания логина и пароля!');
        return [undefined, undefined];
    }
    
    // var indexArr = users.map(function(user, idx){ //проходим по массиву в поисках совпадения логина и пароля, получаем массив с undefined и одним найденым индксом
    //     if(mail === user.email) {
    //         if(pass === user.password && mail === user.email) {
    //             return idx;
    //         } 
    //     } 
    // });

    // var userIndex = indexArr.filter(function(number) { //Фильтруем индекс от undefined и получаем его.
    //     return number >= 0;
    // })[0];

    // if(!userIndex) {
    //     alert('Нет такого сочетания логина и пароля!');
    // }
    // return [users[userIndex], userIndex]; //возвращаем массив с номером индекса и объект под этим индексом
};

var userList = function() {
    if (users.length === 0) {
        alert('В базе нет пользователей!');
    }
    users.forEach(function(user){
        showUser(user);
    })
};

var userChangeAction = function(user) {
    if (user) {
        var choise = prompt(
            'Выбери какое свойство хочешь изменить \n' +
            'a) Имя \n' + 
            'b) Фамилию \n' +
            'c) Возраст\n' +
            'd) Имейл\n' + 
            'e) Пароль\n' +
            'q) Выйти'
        );
        
        switch (choise) {
            case 'a':
                user.name = prompt('Впиши имя своё');
                showUser(user);
                confirm('Желаешь ли еще что то поменять?') ? userChangeAction(user) : mainMenu();
                break;
            case 'b':
                user.surname = prompt('Впиши фамилию свою');
                showUser(user);
                confirm('Желаешь ли еще что то поменять?') ? userChangeAction(user) : mainMenu();
                break;
            case 'c':
                user.age = prompt('Лет тебе сколько?');
                showUser(user);
                confirm('Желаешь ли еще что то поменять?') ? userChangeAction(user) : mainMenu();
                break;
            case 'd':
                user.email = prompt('Адрес электронной почты');
                showUser(user);
                confirm('Желаешь ли еще что то поменять?') ? userChangeAction(user) : mainMenu();
                break;
            case 'e':
                user.password = prompt('Придумай пароль');
                showUser(user);
                confirm('Желаешь ли еще что то поменять?') ? userChangeAction(user) : mainMenu();
                break;
            case 'q':
                alert('Изменения сохранены');
                break;
            default:
                alert('Падаван, кажется ты не отличаешься умом, постарайся лучше');
                mainMenu();
                break;
        }
    }
};

// var userChange = function() {
//     alert('Для изменения данных надо авторизоваться!');
//     var mail = prompt('Введи имейл свой');
//     var pass = prompt('Теперь пароль');

//     users.forEach(function(user){
//         if(mail === user.email) {
//             if(pass === user.password) {
//                 userChangeAction(user);
//             } else {
//                 alert('Нет такого сочетания!');
//                 confirm('Желаешь ли повторить?') ? autorization() : mainMenu();
//             }
//         } 
//     });
// };

var deleteUser = function() {
    var userIndexToDel = autorization()[1];

    if (userIndexToDel >= 0) {
        alert('Пользователь ' + users[userIndexToDel].name + ' успешно удален!');
        users.splice(userIndexToDel, 1);
    }
};

// var deleteUser = function() {
//     alert('Для изменения данных надо авторизоваться!');
//     var mail = prompt('Введи имейл свой');
//     var pass = prompt('Теперь пароль');

//     users.forEach(function(user,idx){
//         if(mail === user.email) {
//             if(pass === user.password) {
//                 users.splice(idx, 1);
//                 userList();
//             } else {
//                 alert('Нет такого сочетания!');
//                 confirm('Желаешь ли повторить?') ? autorization() : mainMenu();
//             }
//         } 
//     });
// };

var mainMenu = function() {
    var userChoice = prompt(
        'Выбирай свой путь на темную сторону: \n' +
        'a) Зарегистрируйся \n' + 
        'b) Авторизуйся\n' +
        'c) Посмотри список сторонников\n' +
        'd) Измени свои данные\n' + 
        'e) Уничтожь пользователя\n' + 
        'q) Уйди и не возвращайся'
    );
    
    switch (userChoice) {
        case 'a':
            registration();
            confirm('Желаешь ли ты продолжить?') ? mainMenu() : alert('До свидания');
            break;
        case 'b':
            showUser(autorization()[0]);
            confirm('Желаешь ли ты продолжить?') ? mainMenu() : alert('До свидания');
            break;
        case 'c':
            userList();
            confirm('Желаешь ли ты продолжить?') ? mainMenu() : alert('До свидания');
            break;
        case 'd':
            userChangeAction(autorization()[0]);
            confirm('Желаешь ли ты продолжить?') ? mainMenu() : alert('До свидания');
            break;
        case 'e':
            deleteUser();
            confirm('Желаешь ли ты продолжить?') ? mainMenu() : alert('До свидания');
            break;
        case 'q':
            alert('Прощай мой юный падаван!');
            return;
        default:
            alert('Падаван, кажется ты не отличаешься умом, постарайся лучше');
            mainMenu();
            break;
    }
};

mainMenu();