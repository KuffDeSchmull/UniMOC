    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('memory');
 
    db.serialize(function() {
        
        db.run("CREATE TABLE semester (year TEXT, name TEXT, from TEXT, to TEXT)");
        db.run("CREATE TABLE modules (name TEXT, semesterName TEXT)");
        db.run("CREATE TABLE courses (name TEXT, modulesName TEXT, semesterName TEXT)");
        db.run("CREATE TABLE professors (name TEXT, surname TEXT, title TEXT, email TEXT, phone TEXT, picture TEXT, notes TEXT)");
        db.run("CREATE TABLE ProfCourse (profName TEXT, profSurname TEXT, courseName TEXT)");
        
        db.run("CREATE TABLE tests (courseName TEXT, semesterName TEXT, date TEXT, room TEXT, building TEXT, duration NUMBER, startTime TEXT)");
        db.run("CREATE TABLE homework (courseName TEXT, semesterName TEXT, deadlineTime TEXT)");
        
        db.run("CREATE TABLE onlineCourses (courseName TEXT, semesterName TEXT, link TEXT)");
        db.run("CREATE TABLE regularCourses (courseName TEXT, semesterName TEXT, room TEXT, building TEXT)");
        
        
        //db.run("CREATE TABLE seminarCourses (info TEXT)");
        //db.run("CREATE TABLE praktikaCourses (info TEXT)");
        //db.run("CREATE TABLE tutoriumCourses (info TEXT)");
        //db.run("CREATE TABLE globaluebungCourses (info TEXT)");
        
        
        db.run("CREATE TABLE repeatingCourses (courseName TEXT, semesterName TEXT, startDay TEXT, endDay TEXT, weekDay TEXT, startTime TEXT, duration Number)");
        db.run("CREATE TABLE nonRepeatingCourses (courseName TEXT, semesterName TEXT, date TEXT, startTime TEXT, duration Number)");
        db.run("CREATE TABLE cancelledCourses (courseName TEXT, semesterName TEXT, date TEXT)");
        
        
        db.run("CREATE TABLE repeatingHomework (courseName TEXT, semesterName TEXT, weekDay TEXT)");
        db.run("CREATE TABLE nonRepeatingHomework (courseName TEXT, semesterName TEXT, date TEXT)");
        db.run("CREATE TABLE cancelledHomework (courseName TEXT, semesterName TEXT, date TEXT)");
        
        db.run("CREATE TABLE studyGroups (courseName TEXT, semesterName TEXT, kommilitoneName TEXT, mtr NUMBER)");
        
        db.run("CREATE TABLE events (eventName TEXT, date TEXT, time TEXT, notes TEXT)");
        
    db.run("CREATE TABLE lorem (info TEXT)");
 
    var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
    }
    stmt.finalize();
 
    db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
    });
    });
 
    db.close();