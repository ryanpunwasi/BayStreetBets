const router = require("express").Router();

module.exports = db => {
  router.post("/pie", (req, res) => {


    const userID = req.body.data.user.id

    const competitionID = req.body.data.user_competitions.id


    db.query(
      `SELECT buy_sell, symbol, price::money::numeric::int, number_of_shares, transaction_date, user_id, competition_id FROM transactions WHERE user_id = $1 AND competition_id = $2;`, [userID, competitionID]).then(result => {

      return res.json(result.rows);
    })
    .catch(e => {
      console.log (e)
    });

  });

  router.post("/portfolio", (req, res) => {


    const userID = req.body.data.user.id
    const competitionID = req.body.data.user_competitions.id

    db.query(
      `SELECT user_balance::money::numeric::int, user_id, competition_id FROM user_competitions WHERE user_id = $1 AND competition_id = $2;`, [userID, competitionID]).then(result => {

      return res.json(result.rows);
    })
    .catch(e => {
      console.log (e)
    });
  });


  return router;
};