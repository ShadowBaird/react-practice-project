const fs = require('node:fs/promises');

const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');

async function readData() {
  const data = await fs.readFile('orders.json', 'utf8');
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile('orders.json', JSON.stringify(data));
}

async function getAll() {
  const storedData = await readData();
  if (!storedData.orders) {
    throw new NotFoundError('Could not find any orders.');
  }
  return storedData.orders;
}

async function get(email) {
  const storedData = await readData();
  if (!storedData.orders || storedData.orders.length === 0) {
    throw new NotFoundError('Could not find any orders.');
  }

  const order = storedData.orders.filter((order) => order.email === email);
  if (!order) {
    throw new NotFoundError('Could not find orders for user ' + order);
  }

  return order;
}

async function add(data) {
  const storedData = await readData();
  storedData.orders.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.events || storedData.events.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.events.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.events[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.events.filter((ev) => ev.id !== id);
  await writeData({events: updatedData});
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
