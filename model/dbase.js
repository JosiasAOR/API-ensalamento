const pg = require("pg")

const database = new pg.Client("postgres://ftefpfjg:NZ8XU6KM5IK38cWCcs1qc_7SAxRpgrpt@silly.db.elephantsql.com/ftefpfjg")

database.connect((erro)=>{
if(erro){
    return console.log("Não deu bpm de SQL")
}else {
    return console.log("DEU BOM SQL")
}

})

module.exports = database