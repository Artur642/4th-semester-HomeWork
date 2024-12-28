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

const image = document.querySelectorAll('img[data-src]');
const loadedWebpBtn = document.getElementById('load-webp-btn');

const loadImage = (image, isWebp = false) => {
    const src = isWebp ? image.dataset.srcWebp : image.dataset.src;
    image.src = src;

    image.addEventListener('load', () => {
        image.classList.add('loaded');
    })
};

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadImage(entry.target);
        }
    })
}, options);

image.forEach(image => observer.observe(image));

loadedWebpBtn.addEventListener('click', () => {
    image.forEach(image => {
        loadImage(image, true);
        observer.unobserve(image);
    })
})