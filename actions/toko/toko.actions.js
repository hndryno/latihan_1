const TokoModel = require("../../models/toko.model") //import model

class Toko { //fungsi nonstatis
    static async all(){
        try{
            let data = await TokoModel.find({}).exec()
            return data
        }catch(err){
            
        }
    }
}

module.exports = Toko
