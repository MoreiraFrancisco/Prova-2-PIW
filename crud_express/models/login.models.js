var mongoose = require("mongoose")

// Não conseguimos completar o serviço de LoginModel. 
// aqui, seria feita a integração do front com o mongodb 

var LoginSchema = mongoose.Schema(
    {
        nome:{type:String,required:true},
        senha:{type:String,required:true}
    }
)

var LoginModel = mongoose.model("login",AlunoSchema)
module.exports = LoginModel