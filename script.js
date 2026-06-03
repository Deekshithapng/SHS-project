const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const admissionForm = document.getElementById('admissionForm');
const formMessage = document.getElementById('formMessage');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

if (admissionForm) {
  admissionForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const parentName = document.getElementById('parentName').value.trim();
    const studentName = document.getElementById('studentName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const grade = document.getElementById('grade').value;

    if (!parentName || !studentName || !email || !phone || !grade) {
      formMessage.textContent = 'Please fill in all required fields.';
      formMessage.style.color = '#dc2626';
      return;
    }

    formMessage.textContent = `Thank you, ${parentName}. Your admission enquiry for ${studentName} has been submitted successfully.`;
    formMessage.style.color = '#16a34a';

    admissionForm.reset();
  });
}

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
  } else {
    header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
  }
});
