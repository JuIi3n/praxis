const main = document.querySelector(".main");



async function loadData() {
  try {
    const json_file = await fetch('../aktuelle_daten.json')
    if(!json_file.ok) {
      throw new Error('Bad response')
    }
    const data = await json_file.json()
    main.innerHTML = ""
    if(data.length == 0) {
      let item = '<section class="container flex">'
      + `<h1>Keine Neuigkeiten</h1>`
      + `<p>Aktuell gibt es keine Neuigkeiten</p>`
      + '</section>'
      main.innerHTML += item
      delete item
    }else {
      data.forEach((element, i) => {
        let item = '<section class="container flex">'
        + `<h1>${element.title.replaceAll('\n', '<br>')}</h1>`
        + `<h2>${element.subtitle.replaceAll('\n', '<br>')}</h2>`
        + `<p>${element.information.replaceAll('\n', '<br>')}</p>`
        + '</section>'

        if(i > 0) {
          item = '<hr>' + item
        }

        main.innerHTML += item
        delete item
      })
    }
  }catch(e) {
    alert("Beim Laden der Seite ist ein Fehler aufgetreten. Die Seite wird neu geladen.")
    location.reload()
  }
}

loadData()