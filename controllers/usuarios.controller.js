const { response, request } = require('express');

const getUsuarios = (req, res = response) => {
  res.json({
    msg: 'get Api',
  });
};

const putUsuarios = (req = request, res = response) => {
  const { id = 0, q } = req.query;
  res.json({
    msg: 'put Api',
    id,
  });
};

const postUsuarios = (req = request, res = response) => {
  const body = req.body;
  res.json({
    msg: 'post Api',
    body,
  });
};

const deleteUsuarios = (req, res = response) => {
  res.json({
    msg: 'delete Api',
  });
};

module.exports = {
  getUsuarios,
  putUsuarios,
  postUsuarios,
  deleteUsuarios,
};
