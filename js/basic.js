;(function(){
	"use strict"
	let name = prompt('Ведите логин', 'Админ' );
if (name == 'Админ') {
	var log = prompt('Ведите пароль', 'Чёрный Властелин') 
	if (log == 'Чёрный Властелин') {
		alert('Добро пожаловать!') 
		} else if (log == null) {
			alert('Вход отменён ')
			} else {
				alert('Пароль неверен')
				}
	} 
	else if (name == null) {
			alert('Вход отменён') 
		} else {
				alert('Я вас не знаю ')
				}

})();