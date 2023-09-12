const facultyMembers = [
  {
    email: "dtang@usc.edu",
    title: "Part-time Lecturer",
    unitsTeaching: 4,
  },
  {
    email: "dent@usc.edu",
    title: "Associate Professor",
    unitsTeaching: 12,
  },
  {
    email: "zune@usc.edu",
    title: "Senior Lecturer",
    unitsTeaching: 14,
  },
  {
    email: "nayeonki@usc.edu",
    title: "Senior Lecturer",
    unitsTeaching: 8,
  },
];

const usernames = [];

for (let i = 0; i < facultyMembers.length; i++) {
  const facultyMember = facultyMembers[i];
  const username = facultyMember.email.replace("@usc.edu", "");
  usernames.push(username);
}

// argument of function can also be (facultyMember) since i is not required
facultyMembers.forEach((facultyMember, i) => {
  const username = facultyMember.email.replace("@usc.edu", "");
  usernames.push(username);
});

const usernameArr = facultyMembers.map((facultyMember) => {
    const username = facultyMember.email.replace("@usc.edu", "");
    return username;
});

const numbers = [1, 2, 3].map((number) => {
    return number * 10; // or simply `(number) => number * 10`
});

const number3 = [1, 2, 3, 4, 5].filter((number) => {
    return number % 2 === 0;
});

let sum = 0
sum = [1, 2, 3, 4].reduce((accumulator, num) => {
    return accumulator + num;
}, 0);