const {
  addMeal,
  getAllMeals,
  deleteMeal,
  editMeal,
  mealDetails,
} = require("../controllers/mealController");
const router = require("express").Router();

router.post("/add-meal", addMeal);
router.get("/meal-detail/:id", mealDetails);
router.put("/edit-meal", editMeal);
router.delete("/delete-meal", deleteMeal);
router.get("/all-meals", getAllMeals);

module.exports = router;
