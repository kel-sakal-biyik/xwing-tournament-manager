describe('Tournament Controller', function() {

    var scope;
    var ctrl;

    beforeEach(function() {
        module('app.tournament');
    });

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('TournamentController', {$scope: scope});
    }));

    it('should have an array of players', function() {
        expect(ctrl.players).toBeDefined();
        expect(angular.isArray(ctrl.players)).toBe(true);
    });
});
