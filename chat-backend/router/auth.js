const router = require("express").Router();

router.get("/login", (req, res) => {
  return res.send("Login screen");
});

router.get("/register", (req, res) => {
  return res.send("Register screen");
});

module.exports = router;
