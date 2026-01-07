const router = require("express").Router();
const { loginAdmin } = require("../controllers/auth.controller");

router.post("/login", loginAdmin);

module.exports = router;
