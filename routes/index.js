import express from "express"
import edge from 'edge.js'

const router = express.Router();

router.get("/", (req, res) => {
    res.send(edge.render('index'))
});

router.get("/page", (req, res) => {
    res.send(edge.render('page'))
});

export default router;