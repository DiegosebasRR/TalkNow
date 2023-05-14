import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send({ data: "Hola mundo" });
});

export { router };
