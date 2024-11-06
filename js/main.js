const list = document.querySelector('ul');
const button = document.querySelector('.btn');

// - Funzione che genera 10 email e li inserisce nella lista
const emailGeneration = () => {
	for (let i = 0; i < 10; i++) {
		fetch('https://flynn.boolean.careers/exercises/api/random/mail')
			.then((response) => response.json())
			.then((data) => {
				console.log(data.response);
				list.innerHTML += `<li class="list-group-item list-group-item-primary">${data.response}</li>`;
			});
	}
};

// - Al click del bottone elimino le 10 emails precedenti e ne genero di nuove
button.addEventListener('click', () => {
	list.innerHTML = ``;
	emailGeneration();
});

emailGeneration();
