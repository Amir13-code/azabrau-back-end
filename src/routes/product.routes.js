const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Product route works");
});

module.exports = router;
