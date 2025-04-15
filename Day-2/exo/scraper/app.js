const fs = require('fs')
const cheerio = require('cheerio')


async function scrapeTable() {
  try {
    const $ = await cheerio.fromURL('https://fr.wikipedia.org/wiki/Meilleurs_buteurs_de_la_Ligue_des_champions_de_l%27UEFA');
    //const $ = cheerio.load(data)
    const table = $('.wikitable').first()
    const players = []
    table.find('tbody tr').each((index, element) => {
      const tds = $(element).find('td')

      // On ignore les lignes d'en-tête sans <td>
      if (tds.length >= 4) {
        const name = $(tds[0]).text().trim()
        const nationality = $(tds[1]).text().trim().replace(/\[\d+\]/g, '')
        const goals = $(tds[2]).text().trim()
        const matches = $(tds[3]).text().trim()

        players.push({
          Nom: name,
          Nationalité: nationality,
          Buts: goals,
          Matchs: matches
        })
      }
    })

    console.log(players)
  } catch (error) {
    console.error('Erreur lors du scraping:', error.message)
  }

}

scrapeTable().then()fs.appendFile('database.json', scrapeTable(), function (err) {   
  if (err) throw err;   
  console.log('Fichier créé !')
})

