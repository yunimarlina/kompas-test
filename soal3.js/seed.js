const client = require('./config')

let seederAuthors = `
INSERT INTO "Authors" ("nama")
  VALUES 
      ('Reporter 1'),('Reporter 2'),('Reporter 3'),('Reporter 4'),('Reporter 5')
`
// client.query(seederAuthors,(err,res) =>{
//   if(err){
//     console.log(err)
//     client.end()
//   } 
//   else {
//     console.log('suksess seed Authors')
//   }
// })


let seederMetaData = `
INSERT INTO "Meta_artikels" ("PostID","Meta_key","Meta_value")
  VALUES 
      (1,'sponsor','Kompas'),(1,'sumber','Kompas'),
      (2,'sumber','Kontan'),(2,'sponsor','Kompas'),
      (3,'Photographer','Photographer 1'),
      (4,'Photographer','Photographer 4')

`
client.query(seederMetaData,(err,res) =>{
  if(err){
    console.log(err)
    client.end()
  } 
  else {
    console.log('suksess seed Authors')
  }
})

