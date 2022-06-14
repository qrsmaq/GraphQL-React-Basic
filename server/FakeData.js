const UserList = [
  {
    id: 1,
    name: "John",
    username: "johnjohn23",
    age: 18,
    nationality: "CANADA",
    friends: [
      {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "BRAZIL",
      },
      {
        id: 4,
        name: "Rafe",
        username: "rafemiester",
        age: 25,
        nationality: "PERU",
      },
    ],
  },
  {
    id: 2,
    name: "Pedro",
    username: "PedroTech",
    age: 20,
    nationality: "BRAZIL",
  },
  {
    id: 3,
    name: "Sarah",
    username: "sassysarah",
    age: 25,
    nationality: "USA",
    friends: [
      {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "BRAZIL",
      },
    ],
  },
  {
    id: 4,
    name: "Rafe",
    username: "rafemiester",
    age: 25,
    nationality: "PERU",
  },
  {
    id: 5,
    name: "Angelica",
    username: "angiebaby",
    age: 30,
    nationality: "GERMANY",
  },
];

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    yearOfPublication: 2019,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "Interstellar",
    yearOfPublication: 2007,
    isInTheaters: false,
  },
  {
    id: 3,
    name: "Superbad",
    yearOfPublication: 2009,
    isInTheaters: false,
  },
  {
    id: 4,
    name: "Batman Returns",
    yearOfPublication: 2014,
    isInTheaters: true,
  },
  {
    id: 5,
    name: "Spiderman No Place Home",
    yearOfPublication: 2020,
    isInTheaters: true,
  },
];

module.exports = { UserList, MovieList };
