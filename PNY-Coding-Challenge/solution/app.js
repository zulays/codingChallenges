let user1 = document.querySelector('.user-1');
let user2 = document.querySelector('.user-2');
let slides = document.querySelectorAll('.slide');
let text = document.querySelector('.review-text');
let userName = document.querySelector('.name');
let role = document.querySelector('.title');
let image = document.querySelector('.user-image');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');

const userDetails = [
  {
    name: 'Tanya Sinclair',
    title: 'UX Engineer',
    photo:
      'https://github.com/zulays/codingChallenges/blob/main/PNY-Coding-Challenge/images/image-tanya.jpg',
    review: `"I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future."`,
  },
  {
    name: 'John Tarkpor',
    title: 'Junior Front-end Developer',
    photo:
      'https://github.com/zulays/codingChallenges/blob/main/PNY-Coding-Challenge/images/image-john.jpg',
    review: `"If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."`,
  },
];

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
