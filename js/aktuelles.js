const main = document.querySelector("main");



async function loadData() {
  try {
    const json_file = await fetch('../aktuelle_daten.json')
    if(!json_file.ok) {
      throw new Error('Bad response')
    }
    const data = await json_file.json()
    data.forEach((element, i) => {
      let item = '<section class="container flex">'
      + `<h1>${element.title}</h1>`
      + `<h2>${element.subtitle}</h2>`
      + `<p>${element.information}</p>`
      + '</section>'

      if(i > 0) {
        item = '<hr>' + item
      }

      main.innerHTML += item
      delete item
    })
    
  }catch(e) {
    alert("Beim Laden der Seite ist ein Fehler aufgetreten. Die Seite wird neu geladen.")
    location.reload()
  }
}

loadData()