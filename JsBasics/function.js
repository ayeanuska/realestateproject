// Function help us to choose the codes that we want to run every time page loads

// maintable and more simpler coding
// 3 stages -
// create func
// call function
// invoke function

// function sayHi(name, app, level = n / a) {
//   // level = .. is a default value .
//   const str =
//     " hello world this is " +
//     name +
//     " , revising function basiccs in " +
//     app +
//     "";
//   console.log(str);
// }

// sayHi("anu , vscode"); // calling function and invoke
// sayHi("aye"); // dynaic using concat "+.+"

// // ALTERANATE  template literals

// function sayHi(name, level) {
//   const str = `${name} lets use template literals `;
//   console.log(str);
// }

// sayHi("anuska ");

// // ES6 arrow function
// const sayHi = (name, add = 23) => {
//   const str = `${name} lets use template literals `;
//   console.log(str);
// };
// // sayHi("anuska ");

// sayHi;

// destructuring

const userList = [
  { name: "anu", location: "hornsby", intrests: " digital art" },

  { name: "sam", location: "gordon", intrests: "music and guitar" },

  { name: "ram", location: "rockdale" },
];

// console.log(userList);

//since third person hasnt got all data using rest/\,

const career = ({ career, intrests }) => {
  return `and she is a ${career} loves ${intrests}`;
};

const personBio = ({ name, location, ...rest }) => {
  console.log(rest);
  //   const { name, location, intrests } = person;
  //   const str = ` ${person.name} is from ${person.location} and she loves ${person.intrests} `;
  let str = ` ${name} is from ${location}.`;

  if (rest.career) {
    str += career(rest);
  }
  return str;
};

// const date = personBio();
// console.log(data);

// const aye= " aye loves creating digital art and is a ugc creator"
userList.foreEach((item, i) => {
  const data = personBio(item);
  console.log(data);
});

//SPread syntax

// expands array into its elements
// You can use spread syntax to make a shallow copy of an array. Each array element retains its identity without getting copied.

// rest syntax - collects multiple elements and condenses in a singlr element
// The rest syntax is used to "collect" remaining items into an array or object. It’s like grabbing the leftovers.
