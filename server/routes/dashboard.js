const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

// all todos and name

router.get("/", authorization, async (req, res) => {
  try {
    const user = await pool.query('`SELECT * FROM users INNER JOIN todos ON users.user_id = todos.user_id`')
    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

// create a todo

// update a todo

// delete a todo

module.exports = router;
