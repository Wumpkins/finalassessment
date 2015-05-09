var app = angular.module('final',[]);

app.controller('MainController', function($scope, HomeworkFactory){

	$scope.homeworks = HomeworkFactory;
});

app.factory('HomeworkFactory', function () {
    		return [
					    {
					        assignment: 'Test First Javascript',
					        url: 'https://github.com/Wumpkins/test_first_javascript',
					        status: 'completed'
					    },
					    {
					        assignment: 'Angular Day 1',
					        url: 'https://github.com/Wumpkins/flashcards-day1',
					        status: 'completed'
					    },
					    {
					        assignment: 'Angular Day 2',
					        url: 'https://github.com/Wumpkins/flash-cards',
					        status: 'completed'
					    },
					    {
					        assignment: 'Angular Day 3',
					        url: 'https://github.com/Wumpkins/flash-cards',
					        status: 'not completed'
					    },
					        {
					        assignment: 'Angular Day 4',
					        url: 'https://github.com/Wumpkins/flash-cards',
					        status: 'not completed'
					    },
					]
});

