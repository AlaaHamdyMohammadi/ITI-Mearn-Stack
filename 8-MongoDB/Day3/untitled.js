db.course.insertOne({"CourseName": "Second", "FinalMark": 80})
db.course.insertOne({"CourseName": "Third", "FinalMark": 60})
db.course.insertOne({"CourseName": "Third", "FinalMark": 100})
db.course.insertOne({"CourseName": "Third", "FinalMark": 80})
db.faculty.insertOne({FacultyName: "Engineer", Adress: "Alex"})
db.faculty.insertOne({FacultyName: "Computer", Adress: "Alex", FacultyID: 33})
db.course.find()

//1)Using aggregation display the sum of final mark for all courses in Course collection.
db.course.aggregate([
    {$group: {_id: "$CourseName", totalMarks: {$sum: "$FinalMark"}}}
])

//2)Display the count of students (use Group by with _id: null, to not specify grouping column).
//db.student.insertOne({FirstName: "Noha", LastName: "Ahmed", IsFired: false, FacultyID: 11, courses: [{CourseID: 1, Grade: "A"}, {CourseID: 2, Grade: "B"}]})
//db.student.insertOne({FirstName: "Nada", LastName: "Mohammed", IsFired: false, FacultyID: 11, courses: [{CourseID: 1, Grade: "A"}, {CourseID: 2, Grade: "B"}]})
db.student.insertOne({FirstName: "Nada", LastName: "Mohammed", IsFired: false, FacultyID: 22, courses: [{CourseID: 1, Grade: "A"}, {CourseID: 2, Grade: "B"}]})
db.student.insertOne({FirstName: "Nada", LastName: "Mohammed", IsFired: false, FacultyID: 33, courses: [{CourseID: 1, Grade: "A"}, {CourseID: 2, Grade: "B"}]})
db.student.insertOne({FirstName: "Alaa", LastName: "Mohammed", IsFired: false, FacultyID: 44, courses: [{CourseID: 1, Grade: "A"}, {CourseID: 2, Grade: "B"}]})
db.student.insertOne({FirstName: "Menna", LastName: "Mohammed", IsFired: false, FacultyID: 55, courses: [{CourseID: 1, Grade: "A"}, {CourseID: 2, Grade: "B"}]})

db.student.find()

db.student.aggregate([
    {$group: {_id: "null", count: {$sum: 1}}}
])

//3) Implement Embedded modeling between Student and Course, by adding array of Courses in the student object.
    //o	Write a query to select courses of specific student.
    
db.student.find()

db.student.aggregate([
    {$match: {"FirstName": "Ali"}},
    {$project: {_id:0, courses: 1}}
    
])

//4)Implement referenced modeling (Manual references) between Student and faculty by adding the faculty id in student object.
    //o	Select specific student with his name, and then display his faculty.

//db.student.aggregate([
//    {$match: {_id: ObjectId}},
//    {$project: {_id:0, FirstName: 1}}
//])

db.createCollection("faculties")
db.faculties.insertMany([
  { _id: 44, name: "Faculty of Science" },
  { _id: 55, name: "Faculty of Arts" },
  
]);
db.faculties.find()
db.student.find()
test = db.student.findOne({FirstName: "Alaa"}).FacultyID
db.faculties.find({_id: test})



//6)Create unique index on FacultyName on the Faculty collection.
db.faculty.find()
db.faculty.createIndex({FacultyName: 1},{unique: true})
db.faculty.getIndexes()











