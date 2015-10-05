;(function() {
    'use strict';

    angular
        .module('app.tournament')
        .controller('TournamentController', TournamentController);

    function TournamentController() {
        var vm = this;

        vm.players = [];
    }
})();
