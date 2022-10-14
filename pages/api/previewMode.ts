import { NextApiRequest, NextApiResponse } from 'next';
import { readFileSync } from 'fs';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const prerenderManifest = readFileSync(__dirname + '/../../.next/prerender-manifest.json');

  return prerenderManifest;
};

export default handler;
