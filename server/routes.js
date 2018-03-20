const router = require("express").Router();

const binary = require("./queries/binary");
const getChoices = require("./queries/get_choices");
const staticTest = require("./queries/static");
const allStaticData = require("./queries/all_static_data");
const staticPositions = require("./queries/static_positions");

router.post("/trial_form", binary.post);
router.get("/choices/:trialId", getChoices.get);
router.post("/static_trial", staticTest.post);
router.get("/all_static_data", allStaticData.get);
router.post("/static_assets_position", staticPositions.post);

module.exports = router;
