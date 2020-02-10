(() => {
  const personalValues = {
    email: 'doug.lb07@gmail.com',
    name: 'Douglas Lima',
    contact: '(11) 95655-8979',
    links: 'https://github.com/douglaslb | https://www.linkedin.com/in/douglas-lima-763952159/',
    bio: 'Fullstack Developer'
  }

  const $$ = element => document.querySelectorAll(element)


  const fields = $$('[aria-label]')

  for (const element of fields) {


    const value = element.getAttribute('aria-label')

    if (/(e-mail|email)/i.test(value)) {
      element.value = personalValues.email
    }

    if (/nome/i.test(value)) {
      element.value = personalValues.name
    }

    if (/contato/i.test(value)) {
      element.value = personalValues.contact
    }

    if (/(github|linkedin)/i.test(value)) {
      element.value = personalValues.links
    }

    if (/bio/i.test(value)) {
      element.value = personalValues.bio
    }
  }
})()
