const router = require("express").Router();
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
const userCtrl = require("../controllers/userCtrl");

router.get("/search", auth, userCtrl.searchUser);

router.get("/user/:id", auth, userCtrl.getUser);

router.patch("/user", auth, userCtrl.updateUser);

router.patch("/user/:id/follow", auth, userCtrl.follow);
router.patch("/user/:id/unfollow", auth, userCtrl.unfollow);

router.get("/suggestionsUser", auth, userCtrl.suggestionsUser);
router.get("/all_infor", auth, authAdmin, userCtrl.getUsersAllInfor);
router.patch("/update_role/:id", auth, authAdmin, userCtrl.updateUsersRole);
module.exports = router;
