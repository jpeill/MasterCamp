module.exports = function(app) {
    const election = require('../controllers/election.controller');

    app.post('/api/election/chercherCode', election.chercher)
}
