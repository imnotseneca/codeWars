/**You have a group chat application, but who is online!?

You want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

The input data has the following structure:

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]
The corresponding output should look as follows:

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
If for example, no users are online the output should look as follows:

{
  offline: ['Lucy'],
  away: ['Bob']
}
username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#). */

const whosOnline = (friends) => {
    if (friends.length === 0) {
      return {};
    }
  
    let friendListStatus = {
      online: [],
      offline: [],
      away: [],
    };
  
    for (let i = 0; i < friends.length; i++) {
      const { username, status, lastActivity } = friends[i];
  
      if (status === "online" && lastActivity > 10) {
        friendListStatus.away.push(username);
      } else if (status === "offline") {
        friendListStatus.offline.push(username);
      } else if (status === "online") {
        friendListStatus.online.push(username);
      }
    }
  
    // Remove 'online' property if there are no users online
    if (friendListStatus.online.length === 0) {
      delete friendListStatus.online;
    }
  
    return friendListStatus;
  };
  
  /*
  params: "friends" is the parameters we receive, and it could be an empty array or an array filled with objects.
  return: we must return an object that can contains 3 properties:
  {
  online: [],
  offline: [],
  away: []
  }
  We should check the status of the users on "friends" and push them to that object.
  -If someone is online but thet LastAct was more than 10min they will be "away"
  example:
  it('Example test one of each', function () {
      friends = [{
        username: 'David',
        status: 'online',
        lastActivity: 10
      }, {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
      }, {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
      }]
      Test.assertDeepEquals(whosOnline(friends), {
        online: ['David'],
        offline: ['Lucy'],
        away: ['Bob']
      }, 'Wrong result for example one of each')
    })
  pseudocode:
  -We create a new object called flStatus that will have those 3 properties.
  -We iterate over "friends" and check their status. 
  -If they are online, also check lastActivity.
  -If LA is greater than 10 then they are away.
  -Check for status length, if its equal to 0 delete it
  -Return the object
  
  */
  