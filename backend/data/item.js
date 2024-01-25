const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util');

async function getAll() {
  const storedData = await readData();
  if (!storedData.items) {
    throw new NotFoundError('Could not find any items.');
  }
  return storedData.items;
}

exports.getAll = getAll;

