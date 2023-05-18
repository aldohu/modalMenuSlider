const toggleButton = document.getElementById('toggle');
const body = document.body;
const showModal = document.getElementById('open');
const closeModal = document.getElementById('close');
const modal = document.getElementById('modal');
toggleButton.addEventListener('click', function () {
	body.classList.toggle('show-nav');
});

showModal.addEventListener('click', function (e) {
	e.preventDefault();
	modal.classList.add('show-modal');
});
closeModal.addEventListener('click', function (e) {
	e.preventDefault();
	modal.classList.remove('show-modal');
});
document.addEventListener('click', function (event) {
	if (event.target === modal) {
		modal.classList.remove('show-modal');
	}
});
