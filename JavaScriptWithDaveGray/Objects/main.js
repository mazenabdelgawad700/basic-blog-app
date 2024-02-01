const Mazen = {
  firstName: "mazen",
  lastName: "ahmed",
  age: 18,
  gender: "male",
  skills: ["HTML", "CSS", "JS", "React", "Bootstrap", "SASS"],
  hoppies: {
    morining: "reading",
    afternoon: "trainning",
    night: "meditation",
  },
  relegion: "Islam",
  state: "single",
  pohneNmber: "01158907731",
  email: "mazneahmedsaleh206@gmail.com",
  address: {
    country: "Egypt",
    governator: "Cairo",
    city: "15 May City",
    street: "mohmmed fareed",
    home: "area 19, groub 3, house 3",
  },
  jopTitle: "juinor Software Front End Engineer",
  college: "Bani Suief National Universty",
  deggree: "CS",
  dateOfStatrignStuding: "2022",
  dateOfGraduating: "2026",
};

// to log all of this keys (properties) we can use Oject.keys, and we get back array of properties
console.log(Object.keys(Mazen));

// to log all of this Values we can use Oject.values, and we get back array of values
console.log(Object.values(Mazen));

// here i'm gonna access each value alone without being in array
for(let attribute in Mazen) {
  console.log(Mazen[attribute]);
}

console.log("===============================");

// here i'm gonna access each property alone without being in array

for(let attribute in Mazen) {
  console.log(attribute);
}

/**
 * you can delete the properties by using delete key word
 * delete Mazen.name;
 * and if you need check about a specific property you can use (object.hasOwnProperty("propName") )
 */

const {age: allowedAge } = Mazen;

if(allowedAge >= 20) {
  console.log("Promoted");
} else {
  console.log('You still young');
}
