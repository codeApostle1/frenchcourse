AOS.init({
    duration: 1000,
    offset: 100,
   
  });

  const sidebar = document.getElementById('sidebar');
  const menuIcon = document.getElementById('menu');
  const cancelMenu = document.getElementById('cancelMenu');

  const course1 = document.getElementById('course1');
  const course2 = document.getElementById('course2');
  const course3 = document.getElementById('course3');

  const orderPop = document.getElementById('order');
  const cancelOrderBtn = document.getElementById('cancelOrder');

  function coursePop() {
    orderPop.style.display = 'flex';

  }

  function cancelOrder() {
    orderPop.style.display = 'none'
  }

  course1.addEventListener('click', coursePop);
  course2.addEventListener('click', coursePop);
  course3.addEventListener('click', coursePop);

  cancelOrderBtn.addEventListener('click', cancelOrder)

  menuIcon.addEventListener('click', showMenu)
  cancelMenu.addEventListener('click', cancelDropdown)

  function showMenu() {
    sidebar.classList.add("show");
  }

  function cancelDropdown() {
   sidebar.classList.remove("show");
  }

  
