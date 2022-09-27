const profile = require("./models");

// { updateprofile }


exports.updateProfile = async (req, res) => {
  try {
    if (req.profile) {
      await profile.findByIdAndUpdate(req.profile._id, {
        $set: { [req.body.key]: req.body.value },
      });
      const profile = await profile.findById(req.profile._id);
      res.status(200).send({ profile: profile.profilename });
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// backend op only
// exports.deleteprofile = async (req, res) => {
//   try {
//     if (req.profile) {
//       await profile.findByIdAndDelete(req.profile._id);
//       res.status(200).send({ message: "Successfully deleted profile" });
//     }
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// };