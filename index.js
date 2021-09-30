const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log('Bem vindo ao bot conversor!');


async function bot() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const valor = readlineSync.question('Informe um valor: ') || 1;
  const moedaInicial = readlineSync.question('Informe uma moeda base: ') || 'dolar';
  const moedaFinal = readlineSync.question('Informe a outra moeda para converter: ') || 'real';

  const Url = `https://www.google.com/search?client=opera-gx&q=${valor}+${moedaInicial}+para+${moedaFinal}&sourceid=opera&ie=UTF-8&oe=UTF-8`;
  await page.goto(Url);
//   await page.screenshot({ path: 'example.png' });

const result = await page.evaluate(() => {
    return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
  });

  console.log(`O valor de ${valor} ${moedaInicial} em ${moedaFinal} é igual a ${result}`);

//   await browser.close();
};

bot()