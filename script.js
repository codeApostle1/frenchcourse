// Initialize animations
AOS.init({
  duration: 1000,
  offset: 100,
});

// Initialize EmailJS
(function() {
  emailjs.init("Dw9v0FUJvTBqKVd1E");
})();

// DOM Elements
const elements = {
  sidebar: document.getElementById('sidebar'),
  menuIcon: document.getElementById('menu'),
  cancelMenu: document.getElementById('cancelMenu'),
  course1: document.getElementById('bok1'),
  course2: document.getElementById('bok2'),
  course3: document.getElementById('bok3'),
  orderPop: document.getElementById('order'),
  cancelOrderBtn: document.getElementById('cancelOrder'),
  newsletterForm: document.querySelector('.newsletter form')
};

// Menu functionality
function toggleMenu(show = true) {
  if (elements.sidebar) {
    elements.sidebar.classList.toggle('show', show);
  }
}

if (elements.menuIcon) {
  elements.menuIcon.addEventListener('click', () => toggleMenu(true));
}

if (elements.cancelMenu) {
  elements.cancelMenu.addEventListener('click', () => toggleMenu(false));
}

// Course popup functionality
function toggleCoursePopup(show = true) {
  if (elements.orderPop) {
    elements.orderPop.style.display = show ? 'flex' : 'none';
  }
}

if (elements.course1) elements.course1.addEventListener('click', () => toggleCoursePopup(true));
if (elements.course2) elements.course2.addEventListener('click', () => toggleCoursePopup(true));
if (elements.course3) elements.course3.addEventListener('click', () => toggleCoursePopup(true));
if (elements.cancelOrderBtn) elements.cancelOrderBtn.addEventListener('click', () => toggleCoursePopup(false));

// Click tracking functions
function sendClickAlert(elementType, recipient = "joelmtn7@gmail.com") {
  return emailjs.send("service_gt7witj", "template_r69f5vo", {
    message: `User clicked ${elementType} at ${new Date().toLocaleString()}`,
    to_email: recipient
  });
}

function confirmCall() {
  if (confirm('Do you want to call +2349128765496?')) {
    window.location.href = 'tel:+2349128765496';
    sendClickAlert('Phone Number Call Initiated');
  }
}

// Message form handling
function handleMessageForm() {
  if (!elements.newsletterForm) return;

  elements.newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const input = elements.newsletterForm.querySelector('input[name="message"]');
    const btn = elements.newsletterForm.querySelector('button[type="submit"]');
    const message = input.value.trim();
    
    if (!message) {
      showAlert('Please enter your message', 'error');
      return;
    }

    if (message.length > 500) {
      showAlert('Message too long (max 500 characters)', 'error');
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Sending...';

    try {
      // Send notification to your friend
      // await emailjs.send("service_gt7witj", "template_r69f5vo", {
      //   message_content: message,
      //   sender_info: 'From website contact form',
      //   date: new Date().toLocaleString(),
      //   to_email: "joelademola3max@gmail.com"
      // });

      // Updated working version:
await emailjs.send("service_gt7witj", "template_r69f5vo", {
  message: message,  // Must match template variables exactly
  to_email: "joelademola3max@gmail.com",
  date: new Date().toLocaleString()
});
      
      // Also send a copy to yourself if needed
      await sendClickAlert('New Message Submission: ' + message.substring(0, 50) + '...');
      
      showAlert('Your message has been sent!', 'success');
      input.value = '';
    } catch (error) {
      console.error('Error:', error);
      showAlert('Failed to send message. Please try again.', 'error');
    } finally {
      btn.disabled = false;
      btn.textContent = 'Send';
    }
  });
}

// UI Feedback
function showAlert(message, type = 'info') {
  // Remove existing alerts
  const existingAlert = document.querySelector('.custom-alert');
  if (existingAlert) existingAlert.remove();

  const alert = document.createElement('div');
  alert.className = `custom-alert ${type}`;
  alert.textContent = message;
  document.body.appendChild(alert);

  setTimeout(() => {
    alert.style.opacity = '0';
    setTimeout(() => alert.remove(), 500);
  }, 3000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Click tracking
  const enrollBtn = document.querySelector('.enroll-now');
  if (enrollBtn) {
    enrollBtn.addEventListener('click', () => sendClickAlert('Enroll Now Button'));
  }

  const phoneLink = document.querySelector('a[href="javascript:void(0);"].contact-d');
  if (phoneLink) {
    phoneLink.addEventListener('click', () => {
      sendClickAlert('Phone Number Link');
      confirmCall();
    });
  }

  const emailLink = document.querySelector('.contact-d[href^="https://mail.google.com"]');
  if (emailLink) {
    emailLink.addEventListener('click', () => sendClickAlert('Email Address Link'));
  }

  // Message form
  handleMessageForm();

  // Close sidebar when clicking outside
  document.addEventListener('click', (event) => {
    if (elements.sidebar && !elements.sidebar.contains(event.target) && 
        !elements.menuIcon.contains(event.target)) {
      toggleMenu(false);
    }
  });
});

// Add CSS for alerts
const style = document.createElement('style');
style.textContent = `
  .custom-alert {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 25px;
    border-radius: 5px;
    color: white;
    z-index: 1000;
    transition: opacity 0.5s;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  .custom-alert.success {
    background-color: #4CAF50;
  }
  .custom-alert.error {
    background-color: #F44336;
  }
  .custom-alert.info {
    background-color: #2196F3;
  }
`;
document.head.appendChild(style);