import * as puppeteer from 'puppeteer';

import { Injectable } from '@nestjs/common';

import { CreateImageDTO } from './dto/CreateImage';

@Injectable()
export class AppService {
  async getImage(body: CreateImageDTO, res): Promise<void> {
    const { height, width, code, type } = body;
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.setViewport({ width, height });
    const screenshotSettings = {
      type,
    };
    if (type === 'jpeg') {
      screenshotSettings['quality'] = 100;
    }
    await page.setContent(code);
    const image = await page.screenshot(screenshotSettings);
    await browser.close();
    res.writeHead(200, {
      'Content-Type': `image/${type}`,
      'Content-Length': image.length,
    });
    return res.end(image);
  }
}
