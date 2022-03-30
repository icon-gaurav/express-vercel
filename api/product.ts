import express from "express";

const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get data has successfully updated",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

export default router;
