/********************
  script.js
  Contains:
  - Image carousel (auto 3s, next/prev, pause on hover)
  - Registration form validation (inline messages, green/red borders)
********************/

/* ------------------ CAROUSEL ------------------ */
(function() {
  // get elements
  const carousel = document.getElementById('carousel');
  const images = Array.from(carousel.querySelectorAll('img'));
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let index = 0;
  let intervalId = null;
  const INTERVAL = 3000; // 3 seconds

  function showSlide(i) {
    if (i < 0) i = images.length - 1;
    if (i >= images.length) i = 0;
    images.forEach((img, idx) => {
      img.classList.toggle('active', idx === i);
    });
    index = i;
  }

  function nextSlide() { showSlide(index + 1); }
  function prevSlide() { showSlide(index - 1); }

  function startAuto() {
    stopAuto();
    intervalId = setInterval(nextSlide, INTERVAL);
  }

  function stopAuto() {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // events
  nextBtn.addEventListener('click', function() {
    nextSlide();
  });

  prevBtn.addEventListener('click', function() {
    prevSlide();
  });

  // pause on hover (bonus)
  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', startAuto);

  // initialize
  showSlide(0);
  startAuto();
})();


/* ------------------ FORM VALIDATION ------------------ */
(function() {
  const form = document.getElementById('regForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const formMessage = document.getElementById('formMessage');

  // small helpers
  function setValid(el, msgEl) {
    el.classList.remove('invalid');
    el.classList.add('valid');
    msgEl.textContent = '';
  }
  function setInvalid(el, msgEl, message) {
    el.classList.remove('valid');
    el.classList.add('invalid');
    msgEl.textContent = message;
  }

  function validateName() {
    const v = nameInput.value.trim();
    if (v.length === 0) {
      setInvalid(nameInput, nameError, 'Name is required.');
      return false;
    }
    setValid(nameInput, nameError);
    return true;
  }

  function validateEmail() {
    const v = emailInput.value.trim();
    if (v.length === 0) {
      setInvalid(emailInput, emailError, 'Email is required.');
      return false;
    }
    // very simple email check
    if (!v.includes('@') || v.indexOf('@') === 0 || v.indexOf('@') === v.length - 1) {
      setInvalid(emailInput, emailError, 'Please enter a valid email (must include "@").');
      return false;
    }
    setValid(emailInput, emailError);
    return true;
  }

  function validatePassword() {
    const v = passwordInput.value;
    if (v.length === 0) {
      setInvalid(passwordInput, passwordError, 'Password is required.');
      return false;
    }
    if (v.length < 8) {
      setInvalid(passwordInput, passwordError, 'Password must be at least 8 characters.');
      return false;
    }
    setValid(passwordInput, passwordError);
    return true;
  }

  // Real-time validation
  nameInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);

  // Handle submit
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.textContent = '';

    const a = validateName();
    const b = validateEmail();
    const c = validatePassword();

    if (a && b && c) {
      // success: simple message (no real backend here)
      formMessage.style.color = '#16a34a';
      formMessage.textContent = 'Success — registration is valid (demo).';
      // reset fields after a short delay
      setTimeout(function() {
        form.reset();
        // remove outlines
        [nameInput, emailInput, passwordInput].forEach(i => i.classList.remove('valid'));
      }, 900);
    } else {
      formMessage.style.color = '#b91c1c';
      formMessage.textContent = 'Please fix the errors above and try again.';
    }
  });
})();
