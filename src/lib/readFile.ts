'use server';

import { promises as fs } from 'fs';

export async function readFile(filePath: string) {
  return await fs.readFile(process.cwd() + '/' + filePath, 'utf-8');
}
