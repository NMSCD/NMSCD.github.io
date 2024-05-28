const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/serviceWorker.js');
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

const setCardDisplay = (btn) => {
  const selectedClass = 'selected';
  document.querySelectorAll('.project-btn').forEach((node) => {
    node.classList.remove(selectedClass);
  });
  btn.classList.add(selectedClass);

  const projectSection = document.querySelector('section.projects');
  projectSection.classList.forEach((cls) => {
    if (cls != 'projects') {
      projectSection.classList.remove(cls);
    }
  });
  projectSection.classList.add(btn.dataset['class']);
};

const onSearchChange = (searchString) => {
  console.log(searchString);
  document.querySelectorAll('article.row.project-tile').forEach((node) => {
    const title = node.dataset['title'] ?? '';
    const description = node.dataset['description'] ?? '';

    const containsTitle = title.toLowerCase().includes(searchString.toLowerCase());
    const containsDescription = description.toLowerCase().includes(searchString.toLowerCase());

    let orderValue = 3;
    node.style.setProperty('opacity', 1);
    node.style.setProperty('order', orderValue);

    const headingNode = node.querySelector('.text-column h3');
    const descriptionNode = node.querySelector('.text-column p');
    if (containsTitle | containsDescription) {
      if (containsTitle) orderValue -= 2;
      if (containsDescription) orderValue -= 1;
      node.style.setProperty('order', orderValue);
      highlight(headingNode, title, searchString);
      highlight(descriptionNode, description, searchString);
    } else {
      node.style.setProperty('opacity', '0.25');
      headingNode.innerHTML = title;
      descriptionNode.innerHTML = description;
    }
  });
};

const highlight = (node, text, searchString) => {
  const index = text.toLowerCase().indexOf(searchString.toLowerCase());
  if (index >= 0) {
    const innerHTML =
      text.substring(0, index) +
      "<span class='highlight'>" +
      text.substring(index, index + searchString.length) +
      '</span>' +
      text.substring(index + searchString.length);
    node.innerHTML = innerHTML;
  } else {
    node.innerHTML = text;
  }
};

registerServiceWorker();
