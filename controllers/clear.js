// delete aspect of crud/ will clear any notes or headlines in db


var db = require("../models");

module.exports = {
  clearDB: function(req, res) {
    db.Headline.remove({})
      .then(function() {
        return db.Note.remove({});
      })
      .then(function() {
        res.json({ ok: true });
      });
  }
};