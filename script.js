const appShell = document.getElementById('appShell');
const modal = document.getElementById('passwordModal');
const modalCard = modal.querySelector('.modal__card');
const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('passwordInput');
const modalFeedback = document.getElementById('modalFeedback');
const closeTriggers = Array.from(document.querySelectorAll('[data-close-modal]'));

const friends = [
  {
    name: 'Diogo',
    slug: 'diogo',
    bgColor: '#f7efe9',
    password: 'trocar-depois-diogo',
    farewell:
      'Escreva aqui a despedida do Diogo. Este texto pode ser alterado a qualquer momento no script.',
    photos: [
      'assets/diogo/foto-1.jpeg',
      'assets/diogo/foto-2.jpeg',
      'assets/diogo/foto-3.jpeg',
      'assets/diogo/foto-4.jpeg',
      'assets/diogo/foto-5.jpeg',
      'assets/diogo/foto-6.jpeg',
      'assets/diogo/foto-7.jpeg',
      'assets/diogo/foto-8.jpeg',
    ],
  },
  {
    name: 'Ana Laura',
    slug: 'ana-laura',
    bgColor: '#e8f0f7',
    password: 'trocar-depois-ana-laura',
    farewell:
      'Escreva aqui a despedida da Ana Laura. As fotos dela podem entrar em assets/ana-laura/.',
    photos: [],
  },
  {
    name: 'Luiza',
    slug: 'luiza',
    bgColor: '#f4eddc',
    password: 'trocar-depois-luiza',
    farewell:
      'Escreva aqui a despedida da Luiza. Você pode editar este bloco sem mexer no HTML.',
    photos: [],
  },
  {
    name: 'João',
    slug: 'joao',
    bgColor: '#edf4ec',
    password: 'trocar-depois-joao',
    farewell:
      'Escreva aqui a despedida do João. A pasta de imagens dele ficará em assets/joao/.',
    photos: [],
  },
  {
    name: 'Andrei',
    slug: 'andrei',
    bgColor: '#f0ebe6',
    password: 'trocar-depois-andrei',
    farewell:
      'Escreva aqui a despedida do Andrei. O fundo e as fotos podem ser ajustados facilmente depois.',
    photos: [],
  },
  {
    name: 'Todos',
    slug: 'para-todos',
    bgColor: '#e8ece6',
    password: 'trocar-depois-para-todos',
    farewell:
      'Escreva aqui a despedida geral para todos. As fotos podem entrar em assets/para-todos/.',
    photos: [],
  },
];

const sectionsByPassword = new Map();
let activeSection = null;

appShell.innerHTML = friends
  .map((friend, index) => {
    const galleryClassName = friend.photos.length ? 'farewell-gallery' : 'farewell-gallery is-empty';
    const photoMarkup = friend.photos.length
      ? friend.photos
          .map(
            (photoPath) => `
              <figure class="memory-shot">
                <img src="${photoPath}" alt="Memória de ${friend.name}" loading="lazy" />
              </figure>
            `,
          )
          .join('')
      : `<p class="memory-placeholder">Adicione fotos em assets/${friend.slug}/ para preencher este espaço.</p>`;

    sectionsByPassword.set(friend.password.toLowerCase(), friend.slug);

    return `
      <section class="friend-section ${index === 0 ? 'is-active' : ''}" data-friend="${friend.slug}" style="--bg-color: ${friend.bgColor};">
        <div class="friend-section__inner reveal-on-scroll">
          <p class="friend-section__eyebrow">Para</p>
          <h1 class="friend-name">${friend.name}</h1>
          <p class="friend-note">Clique no envelope para abrir a lembrança guardada.</p>

          <button class="envelope-button" type="button" aria-label="Abrir carta de ${friend.name}" data-open-password="${friend.password}">
            <span class="envelope-button__fallback" aria-hidden="true"></span>
            <img src="envelope.png" alt="Envelope laranja" class="envelope-button__image" />
          </button>

          <article class="farewell-card" aria-live="polite">
            <div class="farewell-card__overlay"></div>
            <div class="farewell-card__content">
              <p class="farewell-card__label">Carta aberta</p>
              <h2 class="farewell-card__title">Uma lembrança guardada para ${friend.name}.</h2>
              <p class="farewell-card__text">${friend.farewell}</p>
              <div class="${galleryClassName}">
                ${photoMarkup}
              </div>
            </div>
          </article>
        </div>
      </section>
    `;
  })
  .join('');

appShell.classList.add('is-rendered');

const sections = Array.from(document.querySelectorAll('.friend-section'));

sections.forEach((section) => {
  const button = section.querySelector('.envelope-button');
  const password = button?.dataset.openPassword || '';
  const envelopeImage = section.querySelector('.envelope-button__image');

  if (button && envelopeImage) {
    const applyEnvelopeState = () => {
      const hasValidImage = envelopeImage.naturalWidth > 0;
      button.classList.toggle('has-envelope-image', hasValidImage);
      envelopeImage.hidden = !hasValidImage;
    };

    if (envelopeImage.complete) {
      applyEnvelopeState();
    }

    envelopeImage.addEventListener('load', applyEnvelopeState);
    envelopeImage.addEventListener('error', applyEnvelopeState);
  }

  if (password) {
    sectionsByPassword.set(password.toLowerCase(), section);
  }

  button?.addEventListener('click', () => {
    activeSection = section;
    openModal();
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
  },
  { threshold: 0.4, root: appShell },
);

sections.forEach((section) => {
  const inner = section.querySelector('.reveal-on-scroll');
  if (inner) {
    observer.observe(inner);
  }
});

function openModal() {
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  modalFeedback.textContent = '';
  passwordInput.value = '';
  window.setTimeout(() => passwordInput.focus(), 40);
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  modalCard.classList.remove('is-shaking');
  modalFeedback.textContent = '';
}

function shakeModal() {
  modalCard.classList.remove('is-shaking');
  void modalCard.offsetWidth;
  modalCard.classList.add('is-shaking');
}

function scatterPhotos(section) {
  const gallery = section.querySelector('.farewell-gallery');
  if (!gallery || gallery.classList.contains('is-empty')) {
    return;
  }

  const photos = Array.from(gallery.querySelectorAll('.memory-shot'));
  if (!photos.length) {
    return;
  }

  photos.forEach((photo) => {
    const rotation = Math.floor(Math.random() * 21) - 10;
    const marginTop = Math.floor(Math.random() * 31) - 15;
    const marginLeft = Math.floor(Math.random() * 31) - 15;

    photo.style.marginTop = `${marginTop}px`;
    photo.style.marginLeft = `${marginLeft}px`;
    photo.style.transform = `rotate(${rotation}deg)`;
  });
}

function revealSection(section) {
  section.classList.add('section-open');
  window.setTimeout(() => scatterPhotos(section), 260);
}

closeTriggers.forEach((trigger) => {
  trigger.addEventListener('click', closeModal);
});

passwordForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const typedPassword = passwordInput.value.trim().toLowerCase();
  const matchedSection = sectionsByPassword.get(typedPassword);

  if (!matchedSection || matchedSection !== activeSection) {
    modalFeedback.textContent = 'Senha incorreta. Tente novamente.';
    shakeModal();
    return;
  }

  revealSection(matchedSection);
  closeModal();
});

modal.addEventListener('click', (event) => {
  if (event.target.matches('[data-close-modal]')) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});

window.addEventListener('resize', () => {
  const openedSections = document.querySelectorAll('.friend-section.section-open');
  openedSections.forEach((section) => scatterPhotos(section));
});