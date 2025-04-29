// AOS.init({
//     duration: 1000,
//     offset: 100,
   
//   });

//   const sidebar = document.getElementById('sidebar');
//   const menuIcon = document.getElementById('menu');
//   const cancelMenu = document.getElementById('cancelMenu');

//   const course1 = document.getElementById('course1');
//   const course2 = document.getElementById('course2');
//   const course3 = document.getElementById('course3');

//   const orderPop = document.getElementById('order');
//   const cancelOrderBtn = document.getElementById('cancelOrder');

//   function coursePop() {
//     orderPop.style.display = 'flex';

//   }

//   function cancelOrder() {
//     orderPop.style.display = 'none'
//   }

//   course1.addEventListener('click', coursePop);
//   course2.addEventListener('click', coursePop);
//   course3.addEventListener('click', coursePop);

//   cancelOrderBtn.addEventListener('click', cancelOrder)

//   menuIcon.addEventListener('click', showMenu)
//   cancelMenu.addEventListener('click', cancelDropdown)

//   function showMenu() {
//     sidebar.classList.add("show");
//   }

//   function cancelDropdown() {
//    sidebar.classList.remove("show");
//   }

  
// // CORSE SLIDER 

// // const slides = document.querySelectorAll('.course-slide');
// // const prev = document.querySelector('.left');
// // const next = document.querySelector('.right');
// // let currentSlide = 0;

// // function showSlide(index) {
// //   slides.forEach((slide, i) => {
// //     slide.classList.remove('active');
// //     if (i === index) {
// //       slide.classList.add('active');
// //     }
// //   });
// // }

// // prev.addEventListener('click', () => {
// //   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
// //   showSlide(currentSlide);
// // });

// // next.addEventListener('click', () => {
// //   currentSlide = (currentSlide + 1) % slides.length;
// //   showSlide(currentSlide);
// // });

// // const courseContainer = document.getElementById('courses');
// // const slides = document.querySelectorAll('.course-slide');
// // const prevBtn = document.querySelector('.left');
// // const nextBtn = document.querySelector('.right');
// // let currentIndex = 0;

// // function updateCarousel() {
// //   const slideWidth = slides[0].clientWidth;
// //   courseContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
// // }

// // nextBtn.addEventListener('click', () => {
// //   if (currentIndex < slides.length - 1) {
// //     currentIndex++;
// //   } else {
// //     currentIndex = 0; // loop back to first
// //   }
// //   updateCarousel();
// // });

// // prevBtn.addEventListener('click', () => {
// //   if (currentIndex > 0) {
// //     currentIndex--;
// //   } else {
// //     currentIndex = slides.length - 1; // go to last
// //   }
// //   updateCarousel();
// // });

///////////////////////////////////////////////


// // window.addEventListener('resize', updateCarousel);


  AOS.init({
  duration: 1000,
  offset: 100,
});



// Add this code to your existing script.js
// Initialize EmailJS with your Public Key
(function() {
  emailjs.init("Dw9v0FUJvTBqKVd1E"); // Replace with your actual public key
})();

// Function to send email alerts
function sendClickAlert(elementType) {
  emailjs.send("service_gt7witj", "template_r69f5vo", {
    message: `Someone clicked ${elementType}`,
    to_email: "joelmtn7@gmail.com"
  }).then(
    response => console.log("Alert sent successfully:", response),
    error => console.log("Failed to send alert:", error)
  );
}









const sidebar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menu');
const cancelMenu = document.getElementById('cancelMenu');

const course1 = document.getElementById('bok1');
const course2 = document.getElementById('bok2');
const course3 = document.getElementById('bok3');

const orderPop = document.getElementById('order');
const cancelOrderBtn = document.getElementById('cancelOrder');

function coursePop() {
  if (orderPop) orderPop.style.display = 'flex';
}

function cancelOrder() {
  if (orderPop) orderPop.style.display = 'none';
}

if (course1) course1.addEventListener('click', coursePop);
if (course2) course2.addEventListener('click', coursePop);
if (course3) course3.addEventListener('click', coursePop);
if (cancelOrderBtn) cancelOrderBtn.addEventListener('click', cancelOrder);

function showMenu() {
  if (sidebar) sidebar.classList.add('show');
}

function cancelDropdown() {
  if (sidebar) sidebar.classList.remove('show');
}

if (menuIcon) menuIcon.addEventListener('click', showMenu);
if (cancelMenu) cancelMenu.addEventListener('click', cancelDropdown);

document.addEventListener('click', (event) => {
  if (sidebar && !sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
    sidebar.classList.remove('show');
  }
});

// const contactBtn = document.querySelector('.contact-d');
// if (contactBtn) contactBtn.addEventListener('click', confirmCall);
function confirmCall() {
  if (confirm('Do you want to call +2349128765496?')) {
    window.location.href = 'tel:+2349128765496';
  }
}



// Add click listeners to target elements
document.addEventListener('DOMContentLoaded', () => {
  // Enroll Now button
  const enrollBtn = document.querySelector('.enroll-now');
  if (enrollBtn) {
    enrollBtn.addEventListener('click', () => {
      sendClickAlert('Enroll Now Button');
    });
  }

  // Phone number link
  const phoneLink = document.querySelector('a[href="javascript:void(0);"].contact-d');
  if (phoneLink) {
    phoneLink.addEventListener('click', () => {
      sendClickAlert('Phone Number');
      confirmCall();
    });
  }

  // Email address link
  const emailLink = document.querySelector('.contact-d[href^="https://mail.google.com"]');
  if (emailLink) {
    emailLink.addEventListener('click', () => {
      sendClickAlert('Email Address');
    });
  }
});

// Keep your existing JavaScript code below