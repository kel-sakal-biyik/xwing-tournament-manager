describe('Tournament Service', function () {

    beforeEach(module('app.tournament'));

    var tournamentService;
    var httpBackend;

    beforeEach(inject(function ($httpBackend, _tournamentService_) {
        httpBackend = $httpBackend;
        tournamentService = _tournamentService_;
    }));

    it('should add players to db', function () {
        var player = {name: 'Uğur', elo: 1650, queue: 1, id: 1};
        var record = tournamentService.addPlayer(player);

        expect(record).toEqual(player);
    });

    it('should get player from db by id', function () {
        var player = {name: 'Uğur', elo: 1650, queue: 1, id: 1};

        tournamentService.addPlayer(player);
        expect(tournamentService.getPlayer(1)).toEqual(player);
    });

    it('should remove players from db', function () {
        var player = {name: 'Uğur', elo: 1650, queue: 1, id: 1};

        tournamentService.addPlayer(player);
        var removedRecord = tournamentService.removePlayer(1);

        expect(removedRecord).toEqual(player);
    });

});
