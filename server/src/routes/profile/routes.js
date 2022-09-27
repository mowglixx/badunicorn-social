const { Router } = require("express");
const { updateprofile, deleteprofile, listprofiles } = require("./controllers");
const { tokenCheck, hashPass } = require("../../middleware/middleware");
const profileRouter = Router();

profileRouter.get("/profile/:id", listprofiles);
profileRouter.put("/updateProfile", tokenCheck, updateprofile);
// will be implemented on the backend
// profileRouter.delete("/profile", tokenCheck, deleteprofile);

module.exports = profileRouter;
