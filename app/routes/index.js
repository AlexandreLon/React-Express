import express from "express"
import * as ApiController from "../controllers/ApiController"

const router = express.Router();

router.get("/", (req, res) => {
    ApiController.index(req, res)
});

router.get("/user", async (req, res) => {
    await ApiController.userPage(req, res)
});

export default router;