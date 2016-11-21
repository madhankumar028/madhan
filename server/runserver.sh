#!/usr/bin/env bash
echo 'Executing this should run the server at localhost:8000'
echo "Node Modules installation is starting ........"
npm install
echo "Node Modules installation is ended"
echo "starting Grunt task(jshint) to validate all js files"
grunt test
echo "jshint task is completed"
echo "starting node server"
awhile=1
sleep $awhile && chrome "http://localhost:8080"
grunt server
