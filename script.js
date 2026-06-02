const typeWriter = (element, text, delay = 80, callback) => {
  let index = 0;
  const write = () => {
    element.textContent = text.slice(0, index);
    index += 1;
    if (index <= text.length) {
      window.setTimeout(write, delay);
    } else if (callback) {
      callback();
    }
  };
  write();
};

const revealElements = document.querySelectorAll('.fade-in');
const heroCode = document.querySelector('[data-type]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.18,
});

revealElements.forEach(el => observer.observe(el));

window.addEventListener('DOMContentLoaded', () => {
  if (heroCode) {
    typeWriter(heroCode, heroCode.dataset.type, 50);
  }
});

const cursor = document.createElement('div');
const cursorInner = document.createElement('div');
cursor.className = 'custom-cursor';
cursorInner.className = 'custom-cursor-inner';
cursor.appendChild(cursorInner);
document.body.appendChild(cursor);

const updateCursor = (x, y) => {
  cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
};

window.addEventListener('mousemove', (event) => {
  updateCursor(event.clientX - 14, event.clientY - 14);
});

const links = document.querySelectorAll('a, button');
links.forEach(link => {
  link.addEventListener('mouseenter', () => cursor.classList.add('cursor-active'));
  link.addEventListener('mouseleave', () => cursor.classList.remove('cursor-active'));
});

const paragraphs = document.querySelectorAll('.hero-description, .feature-card p, .testimonial-quote');
paragraphs.forEach(text => {
  text.innerHTML = text.textContent.replace(/(\S+\s*)/g, '<span class="word">$1</span>');
});

const revealWords = (element) => {
  const letters = element.querySelectorAll('.word');
  letters.forEach((word, index) => {
    word.style.transition = `opacity 0.55s ease ${index * 0.03}s, transform 0.55s ease ${index * 0.03}s`;
    word.style.opacity = '0';
    word.style.transform = 'translateY(10px)';
    requestAnimationFrame(() => {
      word.style.opacity = '1';
      word.style.transform = 'translateY(0)';
    });
  });
};

const heroDescription = document.querySelector('.hero-description');
if (heroDescription) revealWords(heroDescription);

const stars = document.querySelectorAll('.star-field');
stars.forEach(star => {
  const count = 40;
  for (let i = 0; i < count; i += 1) {
    const dot = document.createElement('span');
    dot.className = 'star-dot';
    const size = Math.random() * 2 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${x}%`;
    dot.style.top = `${y}%`;
    dot.style.opacity = String(Math.random() * 0.8 + 0.2);
    dot.style.animationDuration = `${Math.random() * 6 + 4}s`;
    star.appendChild(dot);
  }
});

const parallaxItems = document.querySelectorAll('.parallax');
window.addEventListener('mousemove', (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 20;
  const y = (event.clientY / window.innerHeight - 0.5) * 20;
  parallaxItems.forEach((item) => {
    const depth = Number(item.dataset.depth) || 1;
    item.style.transform = `translateX(${x / depth}%) translateY(${y / depth}%)`;
  });
});

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');
const highlightSection = () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
};
window.addEventListener('scroll', highlightSection);
highlightSection();

const mobileToggle = document.querySelector('.mobile-menu-toggle');
const navList = document.querySelector('.nav-links');
if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(0.96)' },
      { transform: 'scale(1)' }
    ], {
      duration: 180,
      easing: 'ease-out'
    });
  });
});
