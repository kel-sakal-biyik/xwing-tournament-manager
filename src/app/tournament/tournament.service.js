;(function () {
    'use strict';

    angular.module('app.tournament')
        .factory('tournamentService', tournamentService);

    function tournamentService() {
        var db = {
            players: []
        };
        return {
            addPlayer: addPlayer,
            removePlayer: removePlayer,
            getPlayer: getPlayer
        };

        function addPlayer(player) {
            return _.insert(db.players, player);
        }

        function removePlayer(id) {
            return _.removeById(db.players, id);
        }

        function getPlayer(id) {
            return _.getById(db.players, id);
        }
    }
})();
