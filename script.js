// 1
// const galleryItems = [
//     {
//         preview:
//             'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
//         original:
//             'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
//         description: 'Hokkaido Flower',
//     },
//     {
//         preview:
//             'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
//         original:
//             'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
//         description: 'Container Haulage Freight',
//     },
//     {
//         preview:
//             'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
//         original:
//             'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
//         description: 'Aerial Beach View',
//     },
//     {
//         preview:
//             'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
//         original:
//             'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
//         description: 'Flower Blooms',
//     },
//     {
//         preview:
//             'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
//         original:
//             'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
//         description: 'Alpine Mountains',
//     },
//     {
//         preview:
//             'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
//         original:
//             'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
//         description: 'Mountain Lake Sailing',
//     },
//     {
//         preview:
//             'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
//         original:
//             'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
//         description: 'Alpine Spring Meadows',
//     },
//     {
//         preview:
//             'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
//         original:
//             'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
//         description: 'Nature Landscape',
//     },
//     {
//         preview:
//             'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
//         original:
//             'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
//         description: 'Lighthouse Coast Sea',
//     },
// ];


// const gallery = document.querySelector('.gallery'); 
// const modalBg = document.querySelector('.lightbox'); 
// const overlay = document.querySelector('.lightbox__overlay'); 
// const modalImg = document.querySelector('.lightbox__image'); 
// const closeModal = document.querySelector('.lightbox__button'); 
// const closeModalBtn = document.querySelector('.lightbox__button'); 
// const copyImg = [...galleryItems]; 


// const addImgItems = (copyImg) => { 
//     copyImg.forEach((img) => { 
//         const li = document.createElement('li'); 
//         li.classList.add('gallery__item'); 
//         li.innerHTML = `<a href="${img.original}" class="gallery__link"> 
//             <img src="${img.preview}" alt="${img.description}" class="gallery__image" > 
//         </a>`; 
//         gallery.append(li); 
//     }); 
// }; 
// addImgItems(copyImg); 

// gallery.addEventListener("click", (event) => { 
//     event.preventDefault(); 
//     if (event.target.nodeName !== "IMG") { 
//         return; 
//     } 
//     const clickImg = event.target.alt; 
//     const select = copyImg.find((img) => img.description === clickImg); 
//     updateImg(select); 
// }); 

// const updateImg = (select) => { 
//     if (select) { 
//         modalImg.src = select.original; 
//         modalImg.alt = select.description; 
//         modalBg.classList.add('is-open'); 
//     } 
// }; 
// closeModalBtn.addEventListener("click", modalClose); 
// overlay.addEventListener("click", modalClose); 

// function modalClose() { 
//     modalBg.classList.remove('is-open'); 
//     modalImg.src = ''; 
//     modalImg.alt = ''; 
// }

//1
// const sliderInput = document.querySelector('.slider__input');
// const sliderImage = document.querySelector('.slider__image');

// const image = (value) => {
//   const scale = value / 50;
//   sliderImage.style.transform = `scale(${scale})`;
// };

// const debouncedResize = _.debounce((event) => {
//   image(event.target.value);
// }, 100);

// sliderInput.addEventListener('input', debouncedResize);

// //2
// const box = document.getElementById('box');

// const itemBox = (x, y) => {
//   box.style.left = `${x}px`;
//   box.style.top = `${y}px`;
// };

// const debouncedMove = _.debounce((event) => {
//   moveBox(event.clientX, event.clientY);
// }, 100);

// document.addEventListener('mousemove', debouncedMove);

// const image = document.querySelectorAll('img[data-src]');
// const loadedWebpBtn = document.getElementById('load-webp-btn');

// const loadImage = (image, isWebp = false) => {
//     const src = isWebp ? image.dataset.srcWebp : image.dataset.src;
//     image.src = src;

//     image.addEventListener('load', () => {
//         image.classList.add('loaded');
//     })
// };

// const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.15
// };

// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             loadImage(entry.target);
//         }
//     })
// }, options);

// image.forEach(image => observer.observe(image));

// loadedWebpBtn.addEventListener('click', () => {
//     image.forEach(image => {
//         loadImage(image, true);
//         observer.unobserve(image);
//     })
// })

// Завдання 1: Гра "Натисни правильну клавішу"

// const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm'];
// let currentKeyIndex = 0;

// const keyElement = document.getElementById('key');
// const newGameButton = document.getElementById('new-game');

// function startGame() {
//   currentKeyIndex = Math.floor(Math.random() * keys.length);
//   keyElement.textContent = keys[currentKeyIndex];
//   PNotify.success({ text: 'Гру розпочато! Натисніть правильну клавішу.' });
// }

// window.addEventListener('keydown', (event) => {
//   if (event.key === keys[currentKeyIndex]) {
//     PNotify.success({ text: 'Правильно!' });
//     currentKeyIndex = Math.floor(Math.random() * keys.length);
//     keyElement.textContent = keys[currentKeyIndex];
//   } else {
//     PNotify.error({ text: 'Неправильна клавіша. Спробуйте ще раз.' });
//   }
// });

// window.addEventListener('keypress', (event) => {
//   event.preventDefault();
// });

// newGameButton.addEventListener('click', startGame);

// startGame();

// Завдання 2: Графік статистики продажів

// const chartData = {
//     labels: Array.from({ length: 30 }, (_, i) => (i + 1).toString()),
//     datasets: [
//       {
//         label: "Продажі за останній місяць",
//         data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
//         backgroundColor: "rgba(33, 150, 243, 0.5)",
//         borderColor: "#2196f3",
//         borderWidth: 2,
//         fill: true,
//       },
//     ],
//   };

//   const config = {
//     type: "line",
//     data: chartData,
//     options: {
//       responsive: true,
//       plugins: {
//         legend: {
//           display: true,
//         },
//       },
//       scales: {
//         x: {
//           title: {
//             display: true,
//             text: 'Дні місяця',
//           },
//         },
//         y: {
//           title: {
//             display: true,
//             text: 'Продажі (грн)',
//           },
//         },
//       },
//     },
//   };

//   const ctx = document.getElementById("sales-chart").getContext("2d");
//   new Chart(ctx, config);

// 4
// document.addEventListener("DOMContentLoaded", () => {
//   const timeInput = document.getElementById("timeInput");
//   const output = document.getElementById("output");
//   let timerId;

//   timeInput.addEventListener('input', () => {
//     const time =parseInt(timeInput.value);

//     clearTimeout(timerId);
//     if(isNaN(time) || time <= 0) {
//       output.textContent = 'Введіть коректні дані';
//       return;
//     }
//     output.textContent = `Таймер запущено! Очікуйте ${time} секунд...`;
//     timerId = setTimeout(() => {
//       output.textContent = 'Час вийшов! Ось ваші дані!'
//     }, time*1000)
//   })
// })

//3

// function startGame() {
//   const gameArea = document.getElementById('gameArea');
//   const scoreDisplay = document.getElementById('score');
//   let score = 0;
//   const gameDuration = 10000;
//   let gameInterval;

//   function createTarget() {
//     const target = document.createElement('div');
//     target.className = 'target';

//      const maxX = gameArea.clientWidth - 50;
//      const maxY = gameArea.clientHeight - 50;
//      target.style.left = `${Math.random() * maxX}px`;
//      target.style.top = `${Math.random() * maxY}px`;

//      target.addEventListener('click', () => {
//       score++;
//       scoreDisplay.textContent = `бали: ${score}`;
//       target.remove();
//      });

//      gameArea.appendChild(target);

//      setTimeout(() => target.remove(), 2000);
//   }

//   gameInterval = setInterval(createTarget, 1000);

//   setInterval(() =>{
//     clearInterval(gameInterval);
//     gameArea.innerHTML = '';
//     scoreDisplay.textContent = `Гру завершено Ваші бали: ${score}`

//   }, gameDuration)
// }

// startGame();

// 1
// let count = 0;
//     const interval = setInterval(() => {
//       count++;
//       console.log(`Повідомлення ${count}`);
//       if (count === 5) {
//         clearInterval(interval);
//         console.log('Інтервал зупинено');
//       }
//     }, 1000);

    //2
    function animateElement(element, property, value, step, max) {
      let current = parseInt(getComputedStyle(element)[property], 10) || 0;
      const interval = setInterval(() => {
        if (Math.abs(current - value) >= max) {
          clearInterval(interval);
        } else {
          current += step;
          element.style[property] = current + 'px';
        }
      }, 100);
    }

    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');

    animateElement(box1, 'left', 300, 10, 300);
    animateElement(box2, 'top', 200, 5, 200);