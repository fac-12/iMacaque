const router = require("express").Router();

const binary = require("./queries/binary");
const get_choices = require("./queries/get_choices");

router.post("/trial_form", binary.post);
router.get("/choices/:trialId", get_choices.get);

module.exports = router;
