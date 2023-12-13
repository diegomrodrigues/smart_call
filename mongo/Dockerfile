FROM mongo:latest

COPY script.js .

RUN mongo --authenticationDatabase 'admin' \
    -u MONGO_INITDB_ROOT_USERNAME \ 
    -p MONGO_INITDB_ROOT_PASSWORD \
    script.js

EXPOSE 27017

CMD ["mongod"]
