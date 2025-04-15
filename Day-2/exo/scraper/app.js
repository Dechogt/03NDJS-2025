const fs = require('fs/promises')
const cheerio = require('cheerio')

async function scrapeTable() {
  try {
    // Lecture du fichier HTML local
    const $ = await cheerio.fromURL('https://fr.wikipedia.org/wiki/Meilleurs_buteurs_de_la_Ligue_des_champions_de_l%27UEFA')
    const table = $('.wikitable').first()
    const players = []

    table.find('tbody tr').each((index, element) => {
      const tds = $(element).find('td')

      if (tds.length >= 4) {
        const name = $(tds[0]).text().trim();
        const nationality = $(tds[1]).text().trim().replace(/\[\d+\]/g, '')
        const goals = $(tds[2]).text().trim();
        const matches = $(tds[3]).text().trim();

        players.push({
          Nom: name,
          Nationalité: nationality,
          Buts: goals,
          Matchs: matches
        })
      }
    })

    console.log(players)

    // Écriture dans un fichier texte
    const filePath = './buteurs.json'
    const content = players.map(p => `${p.Nom} | ${p.Nationalité} | ${p.Buts} buts | ${p.Matchs} matchs`).join('\n');
    await fs.writeFile(filePath, content, 'utf8')
    console.log('Les données ont été enregistrées! 😇')

  } catch (error) {
    console.error('Erreur lors du scraping:', error.message)
  }
}

scrapeTable()

