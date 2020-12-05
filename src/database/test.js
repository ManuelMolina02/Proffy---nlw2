const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir DADOS
    proffyValue = { 
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "99999999",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1, 
        cost: "20",
    }

    classScheduleValues = [
        {
        weekday: 1,
        time_from: 720,
        time_to: 1220,
    },
    {
        weekday: 2,
        time_from: 20,
        time_to: 1720,
    }
  ]
  
//   await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar DADOS

    // todos os proffys
 const selectedProffys = await db.all("SELECT * FROM proffys")
//  console.log(selectedProffys)


 const selectClassesAndProffys = await db.all(`
  SELECT classes.*, proffys.*
  FROM proffys
  JOIN classes ON (classes.proffy_id = proffys.id)
  WHERE classes.proffy_id = 1;
 `)
//  console.log(selectClassesAndProffys)

// o horário que a pessoa trabalha é das 8 às 18
// o time_from (8h) precisar ser menor ou igual o horário solicitado
// o time_to (18h) precisa ser maior
 const selectClassesSchedules = await db.all(`
   SELECT class_schedule.*
   FROM class_schedule
   WHERE class_schedule.class_id = "2"
   AND class_schedule.weekday = "1"
   AND class_schedule.time_from <= "620"
   AND class_schedule.time_to > "1300"
 `)

 console.log(selectClassesSchedules)

 })