window.onscroll = function() {
    let header = document.getElementById('navbar')
    
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
};


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


const links = document.querySelectorAll('.container .links .link');
const sections = document.querySelectorAll('div');

links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('active_link'));
        this.classList.add('active_link');
    });
});

function removeActiveClasses() {
    links.forEach(link => link.classList.remove('active_link'));
}

function addActiveClass(id) {
    const activeLink = document.querySelector(`.links a[href="#${id}"]`);
    if (activeLink) {
        removeActiveClasses(); 
        activeLink.classList.add('active_link'); 
    }
}

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            addActiveClass(sectionId); 
        }
    });
}, {
    threshold: 0.7 
});

sections.forEach(section => {
    observer2.observe(section);
});

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto', 
    spaceBetween: 20, 
});


function startProgress() {
// First Progress Circle
let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
    progressEndValue = 100,    
    speed = 50;

let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#ec4899 ${progressStartValue * 3.6}deg, #ffffff00 0deg)`;
    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }    
}, speed);

// Second Progress Circle
let circularProgress2 = document.querySelector(".circular-progress2"),
    progressValue2 = document.querySelector(".progress-value2");

let progressStartValue2 = 0,    
    progressEndValue2 = 90;

let progress2 = setInterval(() => {
    progressStartValue2++;
    progressValue2.textContent = `${progressStartValue2}%`;
    circularProgress2.style.background = `conic-gradient(#62ddad ${progressStartValue2 * 3.6}deg, #ffffff00 0deg)`;
    if (progressStartValue2 == progressEndValue2) {
        clearInterval(progress2);
    }    
}, speed);

// Third Progress Circle
let circularProgress3 = document.querySelector(".circular-progress3"),
    progressValue3 = document.querySelector(".progress-value3");

let progressStartValue3 = 0,    
    progressEndValue3 = 80;

let progress3 = setInterval(() => {
    progressStartValue3++;
    progressValue3.textContent = `${progressStartValue3}%`;
    circularProgress3.style.background = `conic-gradient(#af84bc ${progressStartValue3 * 3.6}deg, #ffffff00 0deg)`;
    if (progressStartValue3 == progressEndValue3) {
        clearInterval(progress3);
    }    
}, speed);

// forth Progress Circle
let circularProgress4 = document.querySelector(".circular-progress4"),
    progressValue4 = document.querySelector(".progress-value4");

let progressStartValue4 = 0,    
    progressEndValue4 = 80;

let progress4 = setInterval(() => {
    progressStartValue4++;
    progressValue4.textContent = `${progressStartValue4}%`;
    circularProgress4.style.background = `conic-gradient(#eabbd0 ${progressStartValue4 * 3.6}deg, #ffffff00 0deg)`;
    if (progressStartValue4 == progressEndValue4) {
        clearInterval(progress4);
    }    
}, speed);

// fifth Progress Circle
let circularProgress5 = document.querySelector(".circular-progress5"),
    progressValue5 = document.querySelector(".progress-value5");

let progressStartValue5 = 0,    
    progressEndValue5 = 90;

let progress5 = setInterval(() => {
    progressStartValue5++;
    progressValue5.textContent = `${progressStartValue5}%`;
    circularProgress5.style.background = `conic-gradient(#4e2949 ${progressStartValue5 * 3.6}deg, #ffffff00 0deg)`;
    if (progressStartValue5 == progressEndValue5) {
        clearInterval(progress5);
    }    
}, speed);

// sixth Progress Circle
let circularProgress6 = document.querySelector(".circular-progress6"),
    progressValue6 = document.querySelector(".progress-value6");

let progressStartValue6 = 0,    
    progressEndValue6 = 80;

let progress6 = setInterval(() => {
    progressStartValue6++;
    progressValue6.textContent = `${progressStartValue6}%`;
    circularProgress6.style.background = `conic-gradient(#eed490 ${progressStartValue6 * 3.6}deg, #ffffff00 0deg)`;
    if (progressStartValue6 == progressEndValue6) {
        clearInterval(progress6);
    }    
}, speed);

// seventh Progress Circle
let circularProgress7 = document.querySelector(".circular-progress7"),
    progressValue7 = document.querySelector(".progress-value7");

let progressStartValue7 = 0,    
    progressEndValue7 = 70;

let progress7 = setInterval(() => {
    progressStartValue7++;
    progressValue7.textContent = `${progressStartValue7}%`;
    circularProgress7.style.background = `conic-gradient(#98b3b9 ${progressStartValue7 * 3.6}deg, #ffffff00 0deg)`;
    if (progressStartValue7 == progressEndValue7) {
        clearInterval(progress7);
    }    
}, speed);

}

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startProgress();
            observer.disconnect(); 
        }
    });
});

let container4 = document.querySelector('.container4');
observer.observe(container4);
