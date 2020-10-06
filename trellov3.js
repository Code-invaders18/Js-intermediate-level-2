let mytodo=
{
    day:'monday',
    meetings:0,
    meetingsdone:0,

    addmeetings:function(num)
    {
        this.meetings = this.meetings+num;
    },

    summary:function()
    {
        console.log(`you have ${this.meetings} meetings left for today`);   
    }
}
mytodo.addmeetings(4)
console.log(mytodo.summary());
//mytodo.summary()

