import { NextApiResponse } from "next";

export default async function handler(req, res: NextApiResponse) {
  const paths = req.body.paths;

  await res.revalidate('/');

  res.status(200).json({ name: 'John Doe' });
}
