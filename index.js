import fragen from "readline-sync"

const name = fragen.question("Wie heist du ")
let alter = fragen.question ("wie at bist du ")
const größe = fragen.question("wie groß bist du ")
const stadt = fragen.question ("in welcher stadt wohnen du ")
let hobby = fragen.question ("hast du hobbys wenn ja welche bei mehreren sag mir 2 davon ")


if (fragen){
    console.log(`Hallo ${name} du bist ${alter} jahre alt und bist ${größe}m groß und wohnst in der statd ${stadt} und das sind seine hobbys ${hobby}.`)
}

