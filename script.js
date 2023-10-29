const showButton = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModel = document.querySelectorAll('.close');
const overlay = document.querySelector('.overlay');


let hiddenModal = true
function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function removeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

showButton.forEach(e => {
  e.addEventListener('click', showModal);
});
closeModel.forEach(e => {
  e.addEventListener('click', removeModal);
});
document.addEventListener('keyup', e => {
  if (e.key === 'Escape') {
    removeModal();
  }
});
