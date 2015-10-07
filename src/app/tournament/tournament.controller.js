;(function () {
    'use strict';

    angular
        .module('app.tournament')
        .controller('TournamentController', TournamentController);

    TournamentController.$inject = ['tournamentService'];

    function TournamentController(tournamentService) {
        var vm = this;

        vm.addPlayer = function addPlayer(player) {
            return tournamentService.addPlayer(player);
        };

        vm.removePlayer = function removePlayer(id) {
            tournamentService.removePlayer(id);
        };

        vm.sortPlayers = function sortPlayers(players) {
            players.sort(function (a, b) {
                if (a.elo === b.elo) {
                    if (a.queue < b.queue) {
                        return -1;
                    } else {
                        return 1;
                    }
                } else {
                    return b.elo - a.elo;
                }
            });

            return players;
        };
    }
})();
