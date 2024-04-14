import { pool } from "../db.js";

export const getItems = async (req, res) => {
  const result = await pool.query("SELECT * FROM items where user_id = 1");
  res.json(result[0]);
};

export const addItem = async (req, res) => {
  const { name, quantity, recived, expiration, quality } = req.body;
  const result = await pool.query(
    "INSERT INTO items (name, quantity, user_id) VALUES (?, ?, 1)",
    [name, quantity]
  );
  res.json(result[0]);
};
