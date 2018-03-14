const router = require("express").Router();

const binary = require("./queries/binary");
const getChoices = require("./queries/get_choices");
const staticTest = require("./queries/static");

router.post("/trial_form", binary.post);
router.get("/choices/:trialId", getChoices.get);
router.post("/static_trial", staticTest.post);

module.exports = router;
