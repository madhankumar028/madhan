(function () {

    'use strict';

    angular
    .module('app.jstest', [])
    .controller('jstestController', function(jstest) {

        var self = this;

        self.onSubmit = onSubmit;

        function onSubmit(task) {

            var selectedTask = task,
                taskObjects = jstest.tasks,
                tasks = Object.key(taskObjetcs),
                i;

            $scope.displayTasks = [];

            tasks.forEach(function (tasks) {
                $scope.displayTasks.push(tasks);
            });

            $scope.selected = $scope.displayTasks[1];

            for (i = 0; i <= displayTasks.length; i++) {
                if ( selectedTask === displayTasks[i]) {
                    console.log('hash');
                    return;
                } else if (selectedTask === displayTasks[i]){
                    console.log('counter');
                    continue;
                } else {
                    console.log('global-counter');
                }
            }
        }
    });
}());
