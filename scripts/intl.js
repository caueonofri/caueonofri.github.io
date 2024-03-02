function langChoose(lang) {
  document.querySelectorAll(`.topbar_icon`).forEach(icon => {
    icon.classList.remove('active');
  })
  for (item in intlSources[lang]) {
    if(document.querySelector(`#${item}`)) {
      document.querySelector(`#${item}`).innerHTML = intlSources[lang][item];
    }
    }
  document.querySelector(`.topbar_icon[alt="${lang}"]`).classList.add('active');
}

const intlSources = {
  english: {
    presentation: 'This is still a work in progress, please wait a little longer...',
    contact: 'Contact me',
    projects_title: "projects"
  },
  portuguese: {
    presentation: 'Esse ainda é um site em progresso, por favor aguarde mais um pouco...',
    contact: 'Entre em contato',
    projects_title: "projetos"
  },
};
