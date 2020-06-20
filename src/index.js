#!/usr/bin/env node

const fetch = require('node-fetch');
const { program } = require('commander');
const process = require('process');

const { log } = console;
const chalk = require('chalk');
// @ts-ignore
program
  .arguments('<day> [optional]')
  // eslint-disable-next-line func-names
  .action((day) => {
    if (day === 'today' || day === '') {
      // eslint-disable-next-line no-use-before-define
      gettodaygubsik();
    }
    // if (day == 'tomorrow') {
    //     gettomorrowgubsik()
    // }
    // if (day == 'week') {
    //     getweekgubsik();
    // }
  }).parse(process.argv);

async function gettodaygubsik() {
  // eslint-disable-next-line camelcase
  const today = new Date();
  const todaydate = today.toISOString().slice(0, 10).replace(/-/g, '');
  const raw_data = await fetch(`https://api.dimigo.in/dimibobs/${todaydate}`).then((res) => res.json()).then((json) => console.log(`
  아침: ${chalk.bgRed(json.breakfast)}
  점심: ${chalk.bgGreen(json.lunch)}
  저녁: ${chalk.bgBlue(json.dinner)}
  `));
}
