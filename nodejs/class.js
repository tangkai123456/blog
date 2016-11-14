/**
 * Created by tangkai on 2016/10/20.
 */
var teacher = require('./teacher');
var students = require('./students');

//teacher.add("zhangyan");
function addClass(teacherName,student){
    teacher.add(teacherName);
    student.forEach(function(item){
        students.add(item);
    })
}
exports.add=addClass;