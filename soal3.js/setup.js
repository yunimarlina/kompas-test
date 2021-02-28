const client = require('./config')
let createAuthors = `
CREATE TABLE IF NOT EXISTS "Authors"(
  id SERIAL PRIMARY KEY,
  "nama" VARCHAR not NULL
)
`

let createArtikels = `
CREATE TABLE IF NOT EXISTS "Artikels"(
  id SERIAL PRIMARY KEY,
  "judul" VARCHAR not NULL,
  "body" VARCHAR not NULL,
  "tanggal_terbit" VARCHAR not NULL,
  "AuthorID" INTEGER,
 FOREIGN KEY ("AuthorID")
   REFERENCES "Authors"(id),
 "page_view" VARCHAR not NULL,
 "status" INTEGER
) 
`
let createMetaArtikel = `
CREATE TABLE IF NOT EXISTS "Meta_artikels"(
  id SERIAL PRIMARY KEY,
  "PostID" INTEGER,
 FOREIGN KEY ("PostID")
   REFERENCES "Artikels"(id),
 "Meta_key" VARCHAR not NULL,
 "Meta_value" VARCHAR not NULL
)
`

client.query(createAuthors, (err, res) => {
  if (err){
   console.log(err)
   client.end()
  }
  else{
    console.log(`table Authors created`)
    client.query(createArtikels,(err,res) =>{
      if (err){
        console.log(err)
        client.end()
      }
      else{
       console.log(`table Artikels created`)
       client.query(createMetaArtikel,(err,res) =>{
         if (err){
           console.log(err)
           client.end()
         }
         else{
           console.log(`table metaArtikel creatted`)
           return client.end()
         }

       })
      }

    })
  }
 
})