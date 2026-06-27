#!/usr/bin/env node

import config from '@/config/image-optimize.config';
import { optimizeImages } from '@/lib/image-optimizer';

async function main() {
  await optimizeImages(config);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
