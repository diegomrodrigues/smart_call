db.createCollection('smart_call')

db.createUser({
    user: 'smart_call',
    pwd: 'password',
    roles: ['readWrite', 'dbAdmin']
})