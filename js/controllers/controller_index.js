var app = angular.module('teamHappiness', []);
app.controller('indexController', function ($scope) {

    $scope.images = [
        {
            path: 'images/emoticons/triste.png',
            width: 250,
            height: 250,
            offsetClass: false
        },
        {
            path: 'images/emoticons/normale.png',
            width: 240,
            height: 240,
            offsetClass: true
        },
        {
            path: 'images/emoticons/felice.png',
            width: 250,
            height: 250,
            offsetClass: true
        }
    ];

    $scope.votes = [
        {
            iid: 0,
            label: 'Triste',
            value: 33,
            style: 'badge-danger',
            offsetClass: false
        },
        {
            iid: 1,
            label: 'Normale',
            value: 33,
            style: 'badge-warning',
            offsetClass: true
        },
        {
            iid: 2,
            label: 'Felice',
            value: 34,
            style: 'badge-success',
            offsetClass: true
        }
    ];

    $scope.rate = function (index) {
        for (let i = 0; i < $scope.votes.length; i++) {
            if (isEquivalent($scope.votes[index], $scope.votes[i]))
                $scope.votes[index].value += 2;
            else
                $scope.votes[i].value -= 1;
        }
    }
});