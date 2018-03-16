const router = require("express").Router();

const binary = require("./queries/binary");
const getChoices = require("./queries/get_choices");
const staticTest = require("./queries/static");
const allStaticData = require("./queries/all_static_data");

router.post("/trial_form", binary.post);
router.get("/choices/:trialId", getChoices.get);
router.post("/static_trial", staticTest.post);
router.get("/all_static_data", allStaticData.get);

module.exports = router;
