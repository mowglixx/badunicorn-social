const { Router } = require("express");
const { updateProfile } = require("./controllers");
const { tokenCheck, hashPass } = require("../../middleware/middleware");
const profileRouter = Router();

profileRouter.param('userId', (req,res,next,userId) => {

})

profileRouter.get("/profile/:userId", listProfiles);
profileRouter.put("/updateProfile", tokenCheck, updateProfile);
// will be implemented on the backend
// profileRouter.delete("/profile", tokenCheck, deleteprofile);

module.exports = profileRouter;
