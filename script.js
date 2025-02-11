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
// function animateElement(element, property, value, step, max) {
//   let current = parseInt(getComputedStyle(element)[property], 10) || 0;
//   const interval = setInterval(() => {
//     if (Math.abs(current - value) >= max) {
//       clearInterval(interval);
//     } else {
//       current += step;
//       element.style[property] = current + 'px';
//     }
//   }, 100);
// }

// const box1 = document.getElementById('box1');
// const box2 = document.getElementById('box2');

// animateElement(box1, 'left', 300, 10, 300);
// animateElement(box2, 'top', 200, 5, 200);

// Завдання 1: ToDo List
// function loadTasks() {
//   let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   let list = document.getElementById("taskList");
//   list.innerHTML = "";
//   tasks.forEach((task, index) => {
//     let li = document.createElement("li");
//     li.textContent = task.text;
//     if (task.done) li.classList.add("task-done");
//     li.onclick = () => toggleTask(index);
//     list.appendChild(li);
//   });
// }
// function addTask() {
//   let taskText = document.getElementById("taskInput").value;
//   if (!taskText) return;
//   let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   tasks.push({ text: taskText, done: false });
//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   loadTasks();
// }
// function toggleTask(index) {
//   let tasks = JSON.parse(localStorage.getItem("tasks"));
//   tasks[index].done = !tasks[index].done;
//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   loadTasks();
// }
// loadTasks();

// // Завдання 3: Закладки
// function loadBookmarks() {
//   let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
//   let list = document.getElementById("bookmarkList");
//   list.innerHTML = "";
//   bookmarks.forEach((url, index) => {
//     let li = document.createElement("li");
//     li.innerHTML = `<a href="${url}" target="_blank">${url}</a> <button onclick="deleteBookmark(${index})">❌</button>`;
//     list.appendChild(li);
//   });
// }
// function addBookmark() {
//   let url = document.getElementById("bookmarkInput").value;
//   if (!url) return;
//   let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
//   bookmarks.push(url);
//   localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
//   loadBookmarks();
// }
// function deleteBookmark(index) {
//   let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
//   bookmarks.splice(index, 1);
//   localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
//   loadBookmarks();
// }
// loadBookmarks();

// // Завдання 4: Контакти
// function loadContacts() {
//   let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
//   let list = document.getElementById("contactList");
//   list.innerHTML = "";
//   contacts.forEach((contact, index) => {
//     let li = document.createElement("li");
//     li.textContent = `${contact.name}: ${contact.phone}`;
//     li.innerHTML += ` <button onclick="deleteContact(${index})">❌</button>`;
//     list.appendChild(li);
//   });
// }
// function addContact() {
//   let name = document.getElementById("contactName").value;
//   let phone = document.getElementById("contactPhone").value;
//   let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
//   contacts.push({ name, phone });
//   localStorage.setItem("contacts", JSON.stringify(contacts));
//   loadContacts();
// }
// function deleteContact(index) {
//   let contacts = JSON.parse(localStorage.getItem("contacts"));
//   contacts.splice(index, 1);
//   localStorage.setItem("contacts", JSON.stringify(contacts));
//   loadContacts();
// }
// loadContacts();

// // Завдання 1
// function startHourTimer() {
//   let timeLeft = 60;
//   const timerInterval = setInterval(() => {
//       timeLeft--;
//       console.log(`Залишилось: ${timeLeft} хвилин`);

//       if (timeLeft === 30) {
//           alert('Залишилось менше половини часу!');
//       }

//       if (timeLeft <= 0) {
//           clearInterval(timerInterval);
//           console.log('Час вийшов!');
//       }
//   }, 60000);
// }

// // Завдання 2
// function startFastTimer() {
//   let timeLeft = 30000;
//   const timerInterval = setInterval(() => {
//       timeLeft -= 1;
//       console.log(`Залишилось: ${(timeLeft / 1000).toFixed(2)} секунд`);

//       if (timeLeft === 10000) {
//           document.body.classList.add('animate');
//       }

//       if (timeLeft <= 0) {
//           clearInterval(timerInterval);
//           document.getElementById('restartBtn').disabled = false;
//           console.log('Час вийшов!');
//       }
//   }, 1);
// }

// document.body.innerHTML += '<button id="restartBtn" onclick="startFastTimer()">Почати знову</button>';

// startHourTimer();

// class CountdownTimer {
//     constructor({ selector, targetDate }) {
//         this.selector = selector;
//         this.targetDate = targetDate;
        
//         this.refs = {
//             days: document.querySelector(`${selector} [data-value="days"]`),
//             hours: document.querySelector(`${selector} [data-value="hours"]`),
//             mins: document.querySelector(`${selector} [data-value="mins"]`),
//             secs: document.querySelector(`${selector} [data-value="secs"]`)
//         };

//         if (!this.refs.days || !this.refs.hours || !this.refs.mins || !this.refs.secs) {
//             console.error("Помилка: не вдалося знайти таймер за селектором", selector);
//             return;
//         }

//         this.start();
//     }

//     start() {
//         this.updateTimer();
//         this.interval = setInterval(() => this.updateTimer(), 1000);
//     }

//     updateTimer() {
//         const time = this.targetDate - new Date();
//         if (time <= 0) {
//             clearInterval(this.interval);
//             this.refs.days.textContent = "00";
//             this.refs.hours.textContent = "00";
//             this.refs.mins.textContent = "00";
//             this.refs.secs.textContent = "00";
//             return;
//         }
        
//         const days = Math.floor(time / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//         const secs = Math.floor((time % (1000 * 60)) / 1000);

//         this.refs.days.textContent = String(days).padStart(2, '0');
//         this.refs.hours.textContent = String(hours).padStart(2, '0');
//         this.refs.mins.textContent = String(mins).padStart(2, '0');
//         this.refs.secs.textContent = String(secs).padStart(2, '0');
//     }
// };

// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('February 8, 2025'),
// });

// 1
// const delay = ms => {
//     return new Promise(resolve => setTimeout(() => resolve(ms), ms));
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// delay(2000).then(logger);
// delay(1000).then(logger);
// delay(1500).then(logger);

// 2
// const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
//   ];
  
//   const toggleUserState = (allUsers, userName) => {
//     return new Promise(resolve => {
//       const updatedUsers = allUsers.map(user =>
//         user.name === userName ? { ...user, active: !user.active } : user
//       );
//       resolve(updatedUsers);
//     });
//   };
  
//   const logger = updatedUsers => console.table(updatedUsers);
  
//   toggleUserState(users, 'Mango').then(logger);
//   toggleUserState(users, 'Lux').then(logger);

// 3
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const makeTransaction = (transaction) => {
    const delay = randomIntegerFromInterval(200, 500);
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const canProcess = Math.random() > 0.3;
        
        if (canProcess) {
          resolve({ id: transaction.id, time: delay });
        } else {
          reject(transaction.id);
        }
      }, delay);
    });
  };
  
  const logSuccess = ({ id, time }) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
  };
  
  const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
  };
  
  makeTransaction({ id: 70, amount: 150 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 71, amount: 230 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 72, amount: 75 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 73, amount: 100 })
    .then(logSuccess)
    .catch(logError);