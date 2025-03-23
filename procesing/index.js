const fs = require('fs')
const rappers = JSON.parse(fs.readFileSync('./rappers.json'))

fs.writeFileSync('./rappers.json', JSON.stringify(rappers.sort()))