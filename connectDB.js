const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://sontrtb:sontr2011@cluster0.aahytp4.mongodb.net/?retryWrites=true&w=majority');
}

const Schema = mongoose.Schema

module.exports = Schema;

