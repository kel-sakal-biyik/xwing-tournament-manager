describe('Tournament Controller', function () {

    var scope;
    var ctrl;

    beforeEach(function () {
        module('app.tournament');
    });

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('TournamentController', {$scope: scope});
    }));

    it('should add players to tournament', function () {
        var player = {name: 'Uğur', elo: 1650, queue: 1, id: 1};
        var record = ctrl.addPlayer(player);

        expect(record).toEqual(player);
    });

    it('should remove players from tournament', function () {
        var player = {name: 'Uğur', elo: 1650, queue: 1, id: 1};

        ctrl.addPlayer(player);
        var removedRecord = ctrl.removePlayer(1);
        expect(removedRecord).not.toContain(player);
    });

    it('should sort players by elo points first then pre-register queues', function () {
        var players = [
            {name: 'Uğur', elo: 1650, queue: 3},
            {name: 'Berkay', elo: 1650, queue: 2},
            {name: 'Halil', elo: 1600, queue: 4},
            {name: 'Görkem', elo: 1615, queue: 1},
            {name: 'Doruk', elo: 1615, queue: 5}
        ];

        var sortedPlayers = [
            {name: 'Berkay', elo: 1650, queue: 2},
            {name: 'Uğur', elo: 1650, queue: 3},
            {name: 'Görkem', elo: 1615, queue: 1},
            {name: 'Doruk', elo: 1615, queue: 5},
            {name: 'Halil', elo: 1600, queue: 4}
        ];

        expect(ctrl.sortPlayers(players)).toEqual(sortedPlayers);
    });
});
