#!/usr/bin/env node

const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const puppeteer = require('puppeteer');


async function printPDF(url, to){
	const browser = await puppeteer.launch({ headless: true });
    	const page =  await browser.newPage();
    	await page.goto(url, {waitUntil:'networkidle0'});
    	const pdf = await page.pdf({path: to, format:'A4'})
    	await browser.close();
    	if(pdf){
	    console.log( "Document Printed");
	} else {
	    console.error("Printing Failed");
	}
    return;
}
return printPDF(argv.url, argv.to);
