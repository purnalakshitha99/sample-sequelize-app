const express = require("express");
const router = express.Router();
const universities = require("../controllers/university.controller.js");

router.post("/", universities.create);
router.get("/", universities.findAll);
router.get("/:id", universities.findOne);
router.put("/:id", universities.update);
router.delete("/:id", universities.delete);

module.exports = router;