let mytodo=
{
    day:'monday',
    meetings:0,
    meetingsdone:0,
}
let addmeetings=function(todo,meet=0)
{
    todo.meetings=todo.meetings+meet
}
let meetdone=function(todo,meet=0)
{
    todo.meetingsdone=todo.meetingsdone - meet
}
let resetday=function(todo)
{
    todo.meetings=0
    todo.meetingsdone=0
}
let getsummary=function(todo)
{
    let meetleft=todo.meetings+todo.meetingsdone
    return `you have ${meetleft} meetings left today`
}
addmeetings(mytodo,5)

addmeetings(mytodo,6)

meetdone(mytodo,7)


console.log(getsummary(mytodo));

