const mongoose = require('mongoose');

const makeConnecton = async () => {
  try {
    await mongoose.connect(process.env.CONNECTIONURL);
    console.log('base de datos online');
  } catch (error) {
    console.log(error);
    throw new Error('error al momento de conectarse a la base de datos');
  }
};
module.exports = {
  makeConnecton,
};
