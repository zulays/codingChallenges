let user1 = document.querySelector('.user-1');
let user2 = document.querySelector('.user-2');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');

function slideShow() {
  user1.style.display = 'none';
  user2.style.display = 'flex';
}

function slideHide() {
  user1.style.display = 'flex';
  user2.style.display = 'none';
}

prevButton.addEventListener('click', slideHide);
nextButton.addEventListener('click', slideShow);
