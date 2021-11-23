--Get the total amount of time that a student has spent on all assignments.

    --This should work for any student but use 'Ibrahim Schimmel' for now.
    --Select only the total amount of time as a single column.


SELECT sum(assighnment_submission.duration) as total_duration
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel';

--  total_duration
-- ----------------
--            6888
-- (1 row)


-- JOIN students ON students.id = student_id

--when you group the students.id = student_id
--students.id is in the students seed
--student_id is from assignment_submissions_seeds
-- join on group them to make the connection then filter where to get the speciific student
