const client = require("./config")

const soal1 = `
SELECT COUNT(*) FROM "Artikels" WHERE "AuthorID" = 1
`
client.query(soal1, (err, res) => {
  if(err){
      console.log(err)
      client.end()
  } else {
      console.log('Jawaban Soal No 1')
      console.table(res.rows)
      // client.end()
  }
})


const soal2 = `
select length(body) from "Artikels"
`
client.query(soal2, (err, res) => {
  if(err){
      console.log(err)
      client.end()
  } else {
      console.log('Jawaban Soal No 2')
      console.table(res.rows)
      // client.end()
  }
})

const soal3 = `
SELECT COUNT(*) AS totalPublish, "Authors".nama
FROM "Authors" INNER JOIN "Artikels" ON "Authors".id = "Artikels"."AuthorID"
GROUP BY "Authors".nama
ORDER BY totalPublish DESC
LIMIT 1
`
client.query(soal3, (err, res) => {
  if(err){
      console.log(err)
      client.end()
  } else {
      console.log('Jawaban Soal No 1')
      console.table(res.rows)
      // client.end()
  }
})

const soal5 = `
SELECT id, tanggal_terbit FROM "Artikels" ORDER BY TO_TIMESTAMP("tanggal_terbit", 'DD-MM-YYYY HH24:MI:SS') DESC
`
client.query(soal5, (err, res) => {
  if(err){
      console.log(err)
      client.end()
  } else {
      console.log('Jawaban Soal No 5')
      console.table(res.rows)
      // client.end()
  }
})

const soal6 = `
SELECT COUNT(*) AS total_TerPublish FROM "Artikels" WHERE status = 1
`
client.query(soal6, (err, res) => {
  if(err){
      console.log(err)
      client.end()
  } else {
      console.log('Jawaban Soal No 6')
      console.table(res.rows)
      // client.end()
  }
})

const soal7 = `
SELECT judul,tanggal_terbit,"Authors".nama, IF("Meta_artikels"."Meta_value" NOT LIKE "%Photographer", "Meta_artikels"."Meta_value", -)
FROM "Artikels" INNER JOIN "Authors" ON "Authors".id = "Artikels"."AuthorID"
INNER JOIN "Meta_artikels" ON "Artikels".id = "Meta_artikels"."PostID"
`
client.query(soal7, (err, res) => {
  if(err){
      console.log(err)
      client.end()
  } else {
      console.log('Jawaban Soal No 7')
      console.table(res.rows)
      // client.end()
  }
})

const soal8 = `
SELECT "Meta_artikels"."Meta_key",judul,TO_TIMESTAMP("tanggal_terbit", 'DD-MM-YYYY HH24:MI:SS')
FROM "Artikels" INNER JOIN "Authors" ON "Authors".id = "Artikels"."AuthorID"
INNER JOIN "Meta_artikels" ON "Artikels".id = "Meta_artikels"."PostID"
`
client.query(soal8, (err, res) => {
  if(err){
      console.log(err)
      client.end()
  } else {
      console.log('Jawaban Soal No 8')
      console.table(res.rows)
      // client.end()
  }
})

const soal9 = `
SELECT AVERAGE(IF(MONTH(TO_TIMESTAMP("tanggal_terbit", 'DD-MM-YYYY HH24:MI:SS')=2))FROM "Artikels"`
client.query(soal9, (err, res) => {
  if(err){
      console.log(err)
      client.end()
  } else {
      console.log('Jawaban Soal No 9')
      console.table(res.rows)
      // client.end()
  }
})