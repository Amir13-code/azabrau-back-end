const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Contact route works");
});

module.exports = router;
