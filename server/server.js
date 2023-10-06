const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = 4000 || process.env.PORT;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./routes/mealRoutes"));

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
