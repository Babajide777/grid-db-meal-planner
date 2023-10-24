export default function Validation(values) {
  const errors = {}

  if (values.title === "") {
    errors.title = "Title cannot be empty"
  }

  if (values.breakfast === "") {
    errors.breakfast = "Breakfast cannot be empty"
  }

  if (values.snack1 === "") {
    errors.snack1 = "Snack1 cannot be empty"
  }

  if (values.lunch === "") {
    errors.lunch = "Lunch cannot be empty"
  }

  if (values.snack2 === "") {
    errors.snack2 = "Snack2 cannot be empty"
  }

  if (values.dinner === "") {
    errors.dinner = "Dinner cannot be empty"
  }

  if (values.snack3 === "") {
    errors.snack3 = "Snack3 cannot be empty"
  }

  if (values.calories === "") {
    errors.calories = "Calories cannot be empty"
  }
  if (typeof values.calories !== "number") {
    errors.calories = "Calories can only be a number"
  }

  if (values.fat < 1) {
    errors.fat = "Value must be greater than 0"
  } else if (values.fat === "" || values.calories.length === 0) {
    errors.fat = "Fat cannot be empty"
  }

  if (values.cabs < 1) {
    errors.cabs = "Value must be greater than 0"
  }

  if (values.fat < 1) {
    errors.protein = "Value must be greater than 0"
  }

  return errors
}
