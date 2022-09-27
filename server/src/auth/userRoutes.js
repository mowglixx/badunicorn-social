const { Router } = require("express");
const { addUser, login, updateUser, deleteUser, listUsers } = require("./userControllers");
const { tokenCheck, hashPass } = require("../middleware/middleware");
const userRouter = Router();

// userRouter.param('userId' (req, res, next, userId) => {

// })
userRouter.post("/register", hashPass, addUser);
userRouter.post("/login", login);
userRouter.get("/list", listUsers);
userRouter.put("/update", tokenCheck, updateUser);
userRouter.delete("/delete", tokenCheck, deleteUser);

module.exports = userRouter;
