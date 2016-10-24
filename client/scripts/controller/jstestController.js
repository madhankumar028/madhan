(function () {

    'use strict';

    angular
    .module('app.jstest', [])
    .controller('jstestController', function(jstest, $scope, JstestService, NgTableParams) {

        var self        = this,
            taskObjects = jstest.tasks,
            tasks       = Object.keys(taskObjects),
            responseData;

        self.requestNo     = 0;
        self.table         = false;
        self.hash          = false;
        self.counter       = false;
        self.globalCounter = false;
        self.onSubmit      = onSubmit;
        self.tableData     = [];

        $scope.errorMessage = '';
        $scope.displayTasks = [];

        tasks.forEach(function (tasks) {
            $scope.displayTasks.push(tasks);
        });

        $scope.selected = $scope.displayTasks[0];

        function onSubmit(task, value) {

            var selectedTask = task,
                input        = value;

            $scope.errorMessage = '';

            self.tableData.length = 0;
            self.requestNo        = self.requestNo + 1;

            if (selectedTask === $scope.displayTasks[0]) {
                generateHash(input, selectedTask);
                $scope.value = '';
            } else if (selectedTask === $scope.displayTasks[1]){
                generateCounter(input, selectedTask);
                $scope.value = '';
            } else {
                generateGlobalCounter(input, selectedTask);
                $scope.value = '';
            }
        }

        function generateHash(input, selectedTask) {

            var task = selectedTask;

            responseData = JstestService.generateHash(input);

            responseData.then(function (response) {
                self.hashResponse = response.data.hash;
                self.tableData.push(self.hashResponse);
                self.table         = true;
                self.hash          = true;
                self.counter       = false;
                self.globalCounter = false;
            });

            constructNgTable(self.tableData, task);
        }

        function generateCounter(input, selectedTask) {

            var task = selectedTask;

            var isCounterInputValid = validateUserInput(input);

            if (isCounterInputValid !== true) {
                $scope.value = '';
                self.requestNo = self.requestNo - 1;
                return;
            } else {
                responseData = JstestService.generateCounter(input);

                responseData.then(function (response) {
                    self.counterResponse = response.data.counter;
                    self.tableData.push(self.counterResponse);
                    self.hash          = false;
                    self.table         = true;
                    self.counter       = true;
                    self.globalCounter = false;
                });

                constructNgTable(self.tableData, task);
            }
        }

        function generateGlobalCounter(input, selectedTask) {

            var task = selectedTask;

            var isGlobalInputValid = validateUserInput(input);

            if (isGlobalInputValid !== true) {
                $scope.value = '';
                return;
            } else {
                responseData = JstestService.generateGlobalCounter(input);

                responseData.then(function (response) {
                    self.globalCounterResponse = response.data.globalCounter;
                    self.tableData.push(self.globalCounterResponse);
                    self.table         = true;
                    self.hash          = false;
                    self.counter       = false;
                    self.globalCounter = true;
                });

                constructNgTable(self.tableData, task);
            }
        }

        function constructNgTable(data, task) {

            for (var i = 0; i < $scope.displayTasks.length; i++ ) {
                if ($scope.displayTasks[i] === task) {
                    self.tableDataParams = new NgTableParams ({
                        getData: function () {
                            return self.tableData;
                        }
                    });
                    return;
                }
            }
        }

        function validateUserInput(input) {

            var isUserInputValid = isNaN(input);

            if (isUserInputValid !== false) {
                $scope.errorMessage = "Only Numbers Are Allowed";
                self.table          = false;
                self.hash           = false;
                self.counter        = false;
                self.globalCounter  = false;
                return false;
            } else {
                return true;
            }
        }
    });
}());
