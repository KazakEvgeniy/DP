


window.onload = function () {

	let div = document.createElement('div'),
		form = document.createElement('form'),
		name = document.createElement('input'),
		surname = document.createElement('input'),
		age = document.createElement('input'),
		button = document.createElement('button'),
		formInput = document.createElement('div'),
		formName = document.createElement('p'),
		formSurName = document.createElement('p'),
		formAge = document.createElement('p');

	document.body.prepend(div);
	div.prepend(form);
	div.style.cssText = 'position:fixed;background-color:rgba(136, 28, 70, 0.575);width:500px;height:auto;left:50%;top:50%;border-radius:15px;border:2px solid black;transform:translate(-50%,-50%);text-align: center;box-shadow: 0 0 15px 12px black;';
	div.className = 'user';

	form.className = 'form';
	form.style.padding = '40px';
	form.prepend(formInput);
	formInput.className = 'form__input';
	formInput.prepend(name);

	name.after(surname);

	name.setAttribute('required', 'required');
	surname.after(age);
	surname.setAttribute('required', 'required');
	const styleInput = 'display:block;width:100%;height:30px;margin-bottom:25px;box-sizing:border-box;padding:15px;font-size:18px;background-color:rgba(0, 0, 0, 0.500);border:none;border-radius:8px;color:#fff';

	surname.style.cssText = styleInput;
	age.style.cssText = styleInput;
	name.style.cssText = styleInput;

	name.before(formName);
	formName.innerText = 'Имя:';
	surname.before(formSurName);
	formSurName.innerText = 'Фамилия:';
	age.before(formAge);
	formAge.innerText = 'Возраст:';

	formName.style.cssText = 'text-align:start;color:#fff;font-size:22px;'
	formSurName.style.cssText = 'text-align:start;color:#fff;font-size:22px;'
	formAge.style.cssText = 'text-align:start;color:#fff;font-size:22px;'


	formInput.after(button);
	age.setAttribute('required', 'required');
	button.type = 'submit';
	button.textContent = 'Продолжить';
	button.style.cssText = 'border-radius:15px;margin-bottom:15px;padding:10px 15px;cursor:pointer;font-size:16px;background-color:#040e2586;color:#fff;';

	function User(name, surname, age) {
		this.name = name;
		this.surname = surname;
		this.age = age;
	}

	let arr = [];
	let arrUsers = [];

	for (let x = 0; x < localStorage.length; x++) {
		arrUsers.push(JSON.parse(localStorage.getItem(`user${x}`)));
	}

	let last = arrUsers.length;

	if (last == 0) {
		button.onclick = () => {
			if (name.value !== '' && surname.value !== '' && age.value !== "") {
				div.style.top = "-250%";
				div.style.transition = "all 1.5s";
				setTimeout(() => { questions(); }, 400);
			}

		};

	}

	else {

		formInput.style.display = 'none';
		div.style.height = 'auto';
		button.style.display = 'none';

		oldUser = document.createElement('button');
		button.after(oldUser);
		oldUser.style.cssText = 'border-radius:15px;padding:10px 15px;cursor:pointer;font-size:16px;background-color:#040e2586;color:#fff;';
		oldUser.textContent = `Продолжить как ${arrUsers[last - 1].name} ${arrUsers[last - 1].surname} ?`;

		oldUser.onclick = () => {
			div.style.top = "-250%";
			div.style.transition = "all 1.5s";
			setTimeout(() => { questions(); }, 400);
		};

		newUser = document.createElement('button');
		button.after(newUser);
		newUser.style.cssText = 'border-radius:15px;padding:10px 15px;cursor:pointer;font-size:16px;margin-bottom:25px;background-color:#040e2586;color:#fff;';
		newUser.innerText = 'ввести данные о себе снова';
		newUser.onclick = () => {
			formInput.style.display = 'block';
			newUser.style.display = 'none';
			button.style.display = 'block';
			oldUser.style.display = 'none';

		};

		button.onclick = () => {
			if (name.value !== '' && surname.value !== '' && age.value !== "") {
				div.style.top = "-250%";
				div.style.transition = "all 1.5s";
				setTimeout(() => { questions(); }, 400);
			}
		};

	}

	button.addEventListener('click', function (e) {
		e.preventDefault();
		arr.push(name.value);
		if (name.value !== '' && surname.value !== '' && age.value !== "") {
			let userX = new User(name.value, surname.value, age.value);
			localStorage.setItem(`user${last++}`, JSON.stringify(userX));
		}
	});


	function questions() {
		let formQuestions = document.createElement('form'),
			formQuestionsInner = document.createElement('div'),
			post = document.createElement('p'),
			postInput = document.createElement('input'),
			experience = document.createElement('p'),
			experienceTextarea = document.createElement('textarea'),
			place = document.createElement('p'),
			gender = document.createElement('p'),
			label1 = document.createElement('label'),
			checkbox1 = document.createElement('input'),
			span1 = document.createElement('span'),
			label2 = document.createElement('label'),
			checkbox2 = document.createElement('input'),
			span2 = document.createElement('span'),
			label3 = document.createElement('label'),
			checkbox3 = document.createElement('input'),
			span3 = document.createElement('span'),
			select = document.createElement('select'),
			option1 = document.createElement('option'),
			option2 = document.createElement('option'),
			family = document.createElement('p'),
			familyLabel1 = document.createElement('label'),
			familyRadio1 = document.createElement('input'),
			familyLabel2 = document.createElement('label'),
			familyRadio2 = document.createElement('input'),
			spanLabel1 = document.createElement('span'),
			spanLabel2 = document.createElement('span'),
			about = document.createElement('p'),
			aboutTextarea = document.createElement('textarea'),
			send = document.createElement('button');

		formQuestions.className = 'formQuestions';
		formQuestionsInner.className = ' formQuestions__inner ';
		div.after(formQuestions);
		formQuestions.prepend(formQuestionsInner);
		formQuestionsInner.prepend(post);
		post.after(postInput);
		postInput.after(experience);
		experience.after(experienceTextarea);
		experienceTextarea.after(place);
		place.after(label1);
		place.textContent = 'Укажите страну в которой вы живёте:';
		label1.prepend(checkbox1);
		label1.append(span1);
		label1.after(label2);
		label2.after(label3);
		label3.after(gender);
		gender.textContent = 'Ваш пол:';
		label2.prepend(checkbox2);
		label3.prepend(checkbox3);

		checkbox2.after(span2);
		checkbox3.after(span3);
		checkbox1.className = 'checkbox';
		checkbox2.className = 'checkbox';
		checkbox3.className = 'checkbox';
		checkbox1.setAttribute('value', 'Российская Федерация');
		checkbox2.setAttribute('value', 'Украина');
		checkbox3.setAttribute('value', 'Польша');


		gender.after(select);
		select.prepend(option1);
		select.prepend(option2);
		select.className = 'select';
		select.after(family);
		family.textContent = 'Семейное положение:';
		family.after(familyLabel1);
		familyLabel1.prepend(familyRadio1);
		familyRadio1.type = 'radio';
		familyRadio1.name = 'family';
		familyRadio1.setAttribute('value', 'Женат/замужем');
		familyRadio2.setAttribute('value', 'Холост/не замужем');
		familyLabel1.style.display = 'block';
		familyLabel2.style.display = 'block';
		familyRadio2.name = 'family';
		familyLabel1.after(familyLabel2);
		familyLabel2.prepend(familyRadio2);
		familyLabel2.append(spanLabel2);
		familyLabel1.append(spanLabel1);
		spanLabel1.innerText = 'Женат/замужем';
		spanLabel2.innerText = 'Холост/не замужем';
		spanLabel1.style.marginLeft = '15px';
		spanLabel2.style.marginLeft = '15px';
		familyLabel2.after(about);
		about.textContent = "Другие сведения, которые вы хотели бы сообщить о себе:";
		about.after(aboutTextarea);
		aboutTextarea.style.cssText = 'width:100%;height:150px;resize: none;font-size:22px;padding:10px;box-sizing: border-box;border-radius:10px';
		aboutTextarea.after(send);
		send.textContent = 'Отправить';
		send.style.cssText = 'margin:40px 0 25px;cursor:pointer;font-size:24px;padding:10px 20px;border-radius:10px;';

		familyRadio2.type = 'radio';
		select.style.cssText = 'font-size:18px;'
		option1.setAttribute('value', 'Мужской');
		familyRadio1.setAttribute('checked', 'true');
		option1.textContent = 'Мужской';
		option2.setAttribute('value', 'Женский');
		option2.textContent = 'Женский';
		span1.textContent = 'Российская Федерация';
		span2.textContent = 'Украина';
		span3.textContent = 'Польша';
		span3.style.marginLeft = '10px';
		span2.style.marginLeft = '10px';
		span1.style.marginLeft = '10px';
		checkbox1.type = 'checkbox';
		checkbox2.type = 'checkbox';
		checkbox3.type = 'checkbox';
		label1.style.cssText = 'display:block;margin-bottom:10px';
		label2.style.cssText = 'display:block;margin-bottom:10px';

		experienceTextarea.style.cssText = 'width:100%;height:100px;resize: none;font-size:22px;padding:10px;box-sizing: border-box;border-radius:10px;';

		experience.innerText = 'Опыт работы в данной сфере:';
		post.innerText = 'Должность, на которую вы претендуете:';
		formQuestions.style.cssText = 'border-radius:15px;border:2px solid black;max-width:800px;height:auto; font-size:25px;padding:25px;margin:0 auto;background-color:rgba(136, 28, 70, 0.575);';
		postInput.style.cssText = 'display:block;width:100%;height:30px;margin-bottom:25px;box-sizing:border-box;padding:15px;font-size:18px;border-radius:10px;;';



		let arrUsers2 = [];

		send.addEventListener('click', (e) => {
			e.preventDefault();






			if (postInput.value && experienceTextarea.value && (checkbox1.checked == true || checkbox2.checked == true || checkbox3.checked == true) && aboutTextarea.value) {

				formQuestions.style.display = 'none';
				let checkboxAll = document.querySelectorAll('.checkbox');
				let modal = document.createElement('div'),
					modalInner = document.createElement('div'),
					registrUserName = document.createElement('p'),
					registrUserSurName = document.createElement('p'),
					registrUserPost = document.createElement('p'),
					registrUserExperience = document.createElement('p'),
					registrUserPlace = document.createElement('p'),
					registrUserGender = document.createElement('p'),
					registrUserFamily = document.createElement('p'),
					registrUserAbout = document.createElement('p'),
					exit = document.createElement('button');




				document.body.append(modal);
				modal.prepend(modalInner);
				modal.className = 'modal';
				modalInner.className = 'modal__inner';
				modalInner.style.cssText = 'padding:40px';
				modalInner.prepend(registrUserName);
				registrUserName.after(registrUserSurName);
				registrUserSurName.after(registrUserPost);
				registrUserPost.after(registrUserExperience);
				registrUserExperience.after(registrUserPlace);
				registrUserPlace.after(registrUserGender);
				registrUserGender.after(registrUserFamily);
				registrUserFamily.after(registrUserAbout);






				for (let i = 0; i < checkboxAll.length; i++) {
					if (checkboxAll[i].checked == true) {
						console.log(checkboxAll[i].value);
						registrUserPlace.innerText = `Проживает: ${checkboxAll[i].value}`;
					}

				}
				let selectValue = document.querySelector('select').value;
				console.log(selectValue);

				for (let x = 0; x < localStorage.length; x++) {
					arrUsers2.push(JSON.parse(localStorage.getItem(`user${x}`)));
				}

				let familyValue = document.querySelectorAll('input[name = "family"]');

				console.log(familyValue);
				for (let i = 0; i < familyValue.length; i++) {
					if (familyValue[i].checked == true) {
						registrUserFamily.innerText = `Семейное положение: ${familyValue[i].value}`;
					}
				}

				let last2 = arrUsers2.length;

				registrUserName.innerText = `Имя: ${arrUsers2[last2 - 1].name}`;
				registrUserSurName.innerText = `Фамилия: ${arrUsers2[last2 - 1].surname}`;
				registrUserPost.innerText = `Должность на которую претендует: ${postInput.value}`;
				registrUserExperience.innerText = `Опыт работы: ${experienceTextarea.value}`;
				registrUserGender.innerText = `Пол: ${selectValue}`;
				registrUserAbout.innerText = `О себе: ${aboutTextarea.value}`;

				modal.style.cssText = 'position:fixed;background-color: rgba(26, 4, 122, 0.486);width:auto;height:auto;left:50%;top:50%;border-radius:15px;border:2px solid black;transform:translate(-50%,-50%);box-shadow: 0 0 15px 12px black;font-size:20px;color:#fff;';





				anime({
					targets: modal,
					translateX: {
						value: 0,
						duration: 800
					},
					rotate: {
						value: 360,
						duration: 1800,
						easing: 'easeInOutSine'
					},
					scale: {
						value: 1.4,
						duration: 1600,
						delay: 800,
						easing: 'easeInOutQuart'
					},
					delay: 250
				});









			}










		});






	}





};










