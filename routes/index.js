import express from "express"
import edge from 'edge.js'

const router = express.Router();

router.get("/", (req, res) => {
    res.send(edge.render('index'))
});

export default router;