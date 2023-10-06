const { addMeal } = require("../controllers/mealController");
const router = require("express").Router();

router.get("/add-meal", addMeal);

module.exports = router;
