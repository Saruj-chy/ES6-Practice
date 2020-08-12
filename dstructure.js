const person = { name: 'saruj', job: 'developer', phone: '01516174937', gfName: 'Unknown', address: 'ctg', friends: ['roky', 'bappy', 'tarek', 'zihad'] };

const { job, phone, friends, salary } = person;  // salary nai, tai eta undefined dekhabe
const name = person.name;
console.log(name, job, phone, friends)
console.log(name, job, phone, friends[1]);

// const { job, phone, friends, salary } = person;
console.log(name, job, phone, salary, friends)

//================  aray er 
const friendAll = ['Sarukh khan', 'salman khan', 'amir khan', 'sakib khan', 'dev', 'zeet'];
const [firstFriend, famousFriend, ...restFriends] = friendAll;
console.log(firstFriend);
console.log(famousFriend);
console.log(restFriends);
console.log(restFriends[1])


//============   complexObject er belai
const complexObject = {
  userName: 'saruj',
  info: {
    location: "chittagong",
    address: 'fultola'
  }
}
// const { location, address } = complexObject; // ekhane info ta na dile value undefined dekhabe
const { location, address } = complexObject.info;
console.log(address, location)