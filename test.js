const puppeteer = require('puppeteer');
const pageUrl = "http://localhost:3101/";
const db = require('./database/index.js');

let page;
let browser;
const width = 1200;
const height = 700;

beforeAll(async () => {
  // db.seed();

  // browser = await puppeteer.launch({
  //   headless: false,
  //   slowMo: 80,
  //   args: ['--window-size=${width}, ${height}']
  // });
  // page = await browser.newPage();
  // await page.setViewport({ width, height });
});
afterAll(() => {
  // browser.close();
});

describe('Database seeds correctly', () => {

  test('Generates exactly 3 tiers in a bundle', () => {
    return db.tiersRequest({ bundleId: 1 })
    .then(results => {
      expect (results.length).toBe(3);
    });
  });

  test('Does not generate less than 2 items in a tier', () => {
    return db.itemsRequest({ tierId: 1 })
    .then(results => {
      expect(results.length).toBeGreaterThan(1);
    });
  });

  test('Does not generate more than 6 items in a tier', () => {
    return db.itemsRequest({ tierId: 1 })
    .then(results => {
      expect(results.length).toBeLessThan(7);
    });
  });
});

describe('Can get tiers by module', () => {

  test('None of the tiers in a module are duplicated', () => {
    //
  });

  test('', () => {
    //
  });
});

describe('Can get items by tier', () => {

  test('None of the items in a tier are duplicated', () => {
    //
  });

  test('', () => {
    //
  });
});

/*
describe('component displays correct tiers', () => {

  // beforeEach(async () => {
  //   await page.goto(pageUrl, { waitUntil: 'networkIdle2' });
  // });

  test('', () => {
    //
  });

  test('', () => {
    //
  });
});

describe('component displays correct items', () => {

  // beforeEach(async () => {
  //   await page.goto(pageUrl, { waitUntil: 'networkIdle2' });
  // });

  test('', () => {
    //
  });

  test('', () => {
    //
  });
});
*/