import express from "express";

const router = express.Router();

let userArray = [
  {
    name: "kamran",
    location: "Ara, Bihar",
    age: 25,
  },
];

//all routes in here are starting with /users so we just need / in .get method
router.get("/", (req, res) => {
  console.log(userArray);
  res.send(userArray);
});

router.post("/", (req, res) => {
  const user = req.body;
  userArray.push(user);
  res.send([
    {
      status: true,
      message: "User Added",
      data: user,
    },
  ]);
});

router.get("/:name", (req, res) => {
  const { name } = req.params;
  const userFound = userArray.find((user) => user.name == name);
  if (userFound) {
    res.send([
      {
        status: true,
        message: "User Found",
        data: userFound,
      },
    ]);
  } else {
    res.send([
      {
        status: false,
        message: "User Not Found",
        data: null,
      },
    ]);
  }
});

router.delete("/:name", (req, res) => {
  const { name } = req.params;
  userArray = userArray.filter((user) => user.name !== name);
  res.send(`${name} is deleted from array`);
});

export default router;
