const pool = require("../config/db");

exports.create = async function (req, res, next) {
  try {
    const { description } = req.body;
    const newtodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.json(newtodo.rows);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getTodo = async function (req, res, next) {
  try {
    const gettodo = await pool.query("SELECT * FROM todo");
    res.json(gettodo.rows);
  } catch (error) {
    console.log(error.message);
  }
};
exports.getTodoOne = async function (req, res, next) {
  try {
    const { id } = req.params;
    const gettodo = await pool.query(`SELECT * FROM todo where todo_id = $1`, [
      id,
    ]);
    res.json(gettodo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateTodo = async function (req, res, next) {
  try {
    const { id } = req.params;
    const { description } = req.params;
    const updatetodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    res.json("Updated");
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteTodo = async function (req, res, next) {
  try {
    const { id } = req.params;
    const deletetodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json("Deleted successfully");
  } catch (error) {
    console.log(error.message);
  }
};
