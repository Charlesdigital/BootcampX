const { Pool } = require("pg");
const cohort = process.argv[2];
const Limit = process.argv[3];

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "bootcampx",
});

pool
  .query(
    `
SELECT students.id, students.name as student_name, cohorts.name
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '%${cohort}%'
LIMIT ${Limit || 5};` // or 5 if the user does not provide a parameter
  )
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(
        `${user.student_name} has an id of ${user.id} and was in the ${user.name} cohort`
      );
    });
  })
  .catch((err) => console.error("query error", err.stack));

// like used for words which you don't know the exact name
