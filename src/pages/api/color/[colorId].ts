import { NextApiRequest, NextApiResponse } from "next";

const COLORS = ["blue", "red", "green", "yellow", "purple"];

export default function handle(req: NextApiRequest, res: NextApiResponse) {
  const index = Number(req.query.colorId) - 1;

  const color = COLORS[index];

  if (color) {
    return res.status(200).json({ color });
  } else {
    return res.status(500).json({ message: "No color found" });
  }
}
