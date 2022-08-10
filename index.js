//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings

//write your code here

const receipe = {
  title: "Mexican style beef pasta",
  serves: 4,
  incredients: [
    "penne",
    "cherry tomatos",
    "beef minced meat",
    "carrots",
    "garlic",
    "mix of spices",
    "grana padano",
    "oregano",
    "parsley",
    "beef broth",
    "paprika",
    "water",
  ],
};
console.log(receipe.title);
console.log(Object.entries(receipe)[1].join(":"));
console.log(Object.keys(receipe)[2] + ":");

for (const incre of receipe.incredients) {
  console.log(incre);
}

//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.

//write your code here
console.log(
  "--------------------------------------------------------------------------"
);

const books = [
  {
    title: "Der Schatten des Windes",
    author: "Carlos Ruiz ZafÓn",
    alreadyRead: true,
  },
  {
    title: "Der Alchemist",
    author: "Paolo Coelho",
    alreadyRead: true,
  },
  {
    title: "The Book of Hidden Things",
    author: "Francesco Dimitri",
    alreadyRead: false,
  },
];

for (const ti of books) {
  console.log(`${ti.title} by ${ti.author}`);

  if (ti.alreadyRead === true) {
    console.log(`You already read "${ti.title}" by ${ti.author}`);
  } else {
    console.log(`You still need to read"${ti.title}" by ${ti.author}`);
  }
}
