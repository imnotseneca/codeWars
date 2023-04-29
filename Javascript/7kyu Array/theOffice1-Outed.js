/*
Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).
*/


function outed(meet, boss){
    return (Object.values(meet).reduce((a,b)=>(a+b),0)+(meet[boss]))
    /(Object.values(meet).length)>5?'Nice Work Champ!':'Get Out Now!'
  }
  
  //PREP
  //PARAMETERS: we receive "meet" as an object that contains name property for people in a meeting and each contains a numberic value that represent happiness rating from 0 to 10. We also have "boss" as a string that represent the name of the boss present.
  //RETURN: we must return "Nice Work Champ!" if the average happiness rate is greater than 5, else we return "Get Out Now!". We must take into count that value happiness rate from "boss" counts double.
  //EXAMPLE:  {'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'), 'Get Out Now!'
  //PSEUDOCODE:
  /*
  -We need to access to all the values from the property of "meet" object and sum them taking into account that "boss" value counts double.
  -After we sum them all we divide the value by the amount of people on the "meet".
  -We see if the value is greater of lesser than 5.
  */