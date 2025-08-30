/* ==========================
   LIGHT/DARK MODE TOGGLE
=========================== */
const themeToggleBtn = document.getElementById('themeToggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

/* ==========================
   COUNTER GAME
=========================== */
let count = 0;
const counterBtn = document.getElementById('counterBtn');
const countDisplay = document.getElementById('count');

counterBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

/* ==========================
   COLLAPSIBLE FAQ
=========================== */
const faqButtons = document.querySelectorAll('.faq-btn');
faqButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const content = btn.nextElementSibling;
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
  });
});

/* ==========================
   FORM VALIDATION
=========================== */
const form = document.getElementById('signupForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Input fields
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  // Error spans
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const successMessage = document.getElementById('successMessage');

  // Clear previous messages
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  successMessage.textContent = '';

  let isValid = true;

  // Name validation
  if (name.value.trim() === '') {
    nameError.textContent = 'Name cannot be empty';
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === '') {
    emailError.textContent = 'Email cannot be empty';
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    emailError.textContent = 'Enter a valid email';
    isValid = false;
  }

  // Password validation
  if (password.value.trim() === '') {
    passwordError.textContent = 'Password cannot be empty';
    isValid = false;
  } else if (password.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
    isValid = false;
  }

  // Success
  if (isValid) {
    successMessage.textContent = 'Form submitted successfully!';
    form.reset();
  }
});
