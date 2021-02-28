const {User,Berita} = require('./models/index')

class Controller{
  static login(req,res){
    User.findOne({where: {email:req.body.email}})
      .then (data=>{
        if(!data){
          res.status(401).json({message: `Account not Found`})
        }
        else if(req.body.email === data.password){
          res.status(200).json({message: `Welcome ${data.name}`})
        }
        else {
          res.status(401).json({message: `Account not Found`})
        }
      })
      .catch (err=>{
        res.status(401).json(err)
      })
  }
  static addBerita(req,res){
    const userLoggin = 1
    const berita = 
    {judul,body,tanggal_terbit, UserId: userLoggin}
     Berita.create(berita)
      .then(data=>{
        res.status(200).json({message: `Berita dengan judul ${data.judul} berhasil dibuat`})
      })
      .catch(err=>{
        res.status(401).json(err)
      })
  }
  static deleteBerita(req,res){
    const userLoggin = 1
     Berita.destroy({where:{id:req.params.id}})
      .then(data=>{
        res.status(200).json({message: `Berita berhasil dihapus`})
      })
      .catch(err=>{
        res.status(401).json(err)
      })

  }
}
module.exports = Controller