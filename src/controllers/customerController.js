const pool = require('../database');

const controller = {};

controller.list = async (req, res, next) => {
  try {
    const [customers] = await pool.query('SELECT * FROM customer');

    res.render('customers', {
      data: customers
    });
  } catch (error) {
    next(error);
  }
};

controller.save = async (req, res, next) => {
  try {
    const data = req.body;

    await pool.query('INSERT INTO customer SET ?', [data]);

    res.redirect('/');
  } catch (error) {
    next(error);
  }
};

controller.edit = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [rows] = await pool.query(
      'SELECT * FROM customer WHERE id = ?',
      [id]
    );

    res.render('customers_edit', {
      data: rows[0]
    });
  } catch (error) {
    next(error);
  }
};

controller.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newCustomer = req.body;

    await pool.query(
      'UPDATE customer SET ? WHERE id = ?',
      [newCustomer, id]
    );

    res.redirect('/');
  } catch (error) {
    next(error);
  }
};

controller.delete = async (req, res, next) => {
  try {
    const { id } = req.params;

    await pool.query(
      'DELETE FROM customer WHERE id = ?',
      [id]
    );

    res.redirect('/');
  } catch (error) {
    next(error);
  }
};

module.exports = controller;