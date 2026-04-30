const linkForm = document.getElementById('link-form');
const titleInput = document.getElementById('link-title');
const urlInput = document.getElementById('link-url');
const linksList = document.getElementById('links-list');
const emptyState = document.getElementById('empty-state');

const STORAGE_KEY = 'dashboardLinks';

function getStoredLinks() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

function saveLinks(links) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}

function renderLinks() {
  const links = getStoredLinks();
  linksList.innerHTML = '';

  if (links.length === 0) {
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';
  links.forEach((link, index) => {
    const item = document.createElement('li');
    item.className = 'link-card';

    item.innerHTML = `
      <a href="${link.url}" target="_blank" rel="noopener noreferrer">
        <strong>${link.title}</strong>
        <span>${link.url}</span>
      </a>
      <button type="button" class="delete-link" data-index="${index}"><i class="fa-solid fa-trash"></i> Eliminar</button>
    `;

    linksList.appendChild(item);
  });
}

function addLink(event) {
  event.preventDefault();
  const title = titleInput.value.trim();
  const url = urlInput.value.trim();
  if (!title || !url) return;

  const links = getStoredLinks();
  links.push({ title, url });
  saveLinks(links);
  titleInput.value = '';
  urlInput.value = '';
  renderLinks();
}

function removeLink(index) {
  const links = getStoredLinks();
  links.splice(index, 1);
  saveLinks(links);
  renderLinks();
}

if (linkForm) {
  renderLinks();
  linkForm.addEventListener('submit', addLink);
  linksList.addEventListener('click', (event) => {
    const button = event.target.closest('.delete-link');
    if (!button) return;
    removeLink(Number(button.dataset.index));
  });
}
