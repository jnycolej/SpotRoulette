import { Router } from "express";
import { TAGS } from "../data/tags";

const router = Router();

router.get("/", (req, res) => {
    res.json(TAGS);
});

export default router;