/**
 * Created by tangkai on 2016/10/20.
 */
var Class = require("./class.js");
//Class.add("张岩",["张宇","苏勇"]);
function addSchool(school){
    school.forEach(function(item){
        var school=item;
        var teacher=item.teacher;
        var student=item.student;
        console.log(school);
        Class.add(teacher,student);
    });

}
var list=[];
list[0]={
    "teacher":"张岩",
    "student":["张宇","苏勇"]
};
console.log(list);
addSchool(list);
exports.addSchool=addSchool;