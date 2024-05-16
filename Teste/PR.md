corrigi csv com site: https://csvjson.com/csv2json

$ docker cp ../Teste/csvjson.json mongo:/tmp

# mongoimport -d contratos -c contratos /tmp/csvjson.json --jsonArray

mongsh

show dbs

use contratos

-- para as queries

alterei os campos "idcontrato" para "_id" por causa do mongoDB default _id

-- para exercico 1:
cd ex1/api

npm i

npm start

-- ex2:
cd ex2/frontend

npm i

npm start