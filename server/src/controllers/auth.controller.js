import bcrypt from "bcrypt";
import { pool } from "../db.js";

export const postUser = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    // Password hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user info
    const result = await pool.query(
      "INSERT INTO Users (email, password, username) VALUES (?, ?, ?)",
      [email, hashedPassword, username]
    );

    res.json(result[0].affectedRows);
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ error: "Server internal Error" });
  }
};
