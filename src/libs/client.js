// microcms-js-sdkの読み込み
import { createClient } from  'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'kazulelog',
  apiKey: process.env.API_KEY,
});
