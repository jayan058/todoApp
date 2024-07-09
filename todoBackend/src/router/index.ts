import express from "express";

import todoRoute from "./todos";

const router = express();

router.use("/todos", todoRoute);

export default router;
