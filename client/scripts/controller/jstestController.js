(function () {

    'use strict';

    angular
    .module('app.jstest', [])
    .controller('jstestController', function(jstest, $scope, jstestService) {

        var self = this;

        var taskObjects = jstest.tasks;
        var tasks = Object.keys(taskObjects);

        self.onSubmit = onSubmit;

        $scope.displayTasks = [];

        tasks.forEach(function (tasks) {
            $scope.displayTasks.push(tasks);
        });

        $scope.selected = $scope.displayTasks[0];

        function onSubmit(task, value) {

            var selectedTask = task,
                input = value,
                test;

            if (selectedTask === $scope.displayTasks[0]) {
                var generatedHash = jstestService.generateHash(input);
                // self.generatedHash = jstestService.generatedHash.hash;
                generatedHash.then(function (response) {
                    test = response.data;
                });
                console.log(test);
            } else if (selectedTask === $scope.displayTasks[1]){
                jstestService.generateCounter(input);
                self.error = jstestService.errorMessage;
            } else {
                jstestService.generateGlobalCounter(input);
            }
        }
    });
}());
