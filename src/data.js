const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, 'json/users.json');
const accountsPath = path.join(__dirname, 'json/accounts.json');

const accountData = fs.readFileSync(path.join(__dirname, 'json/accounts.json'), { encoding: 'utf-8'});
const accounts = JSON.parse(accountData);
const userData = fs.readFileSync(path.join(__dirname, '/json/users.json'), { encoding: 'utf-8' });
const users = JSON.parse(userData);

const writeJSON = () => {
  let accountsJSON = JSON.stringify(accounts);
  fs.writeFileSync(accountsPath, accountsJSON, 'utf-8');
}

module.exports = { accounts, users, writeJSON };