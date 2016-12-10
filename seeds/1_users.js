"use strict";

let users = [{
  id: 1,
  user_name: 'Wilson',
  email: 'wilson1@fakeyahoo.com',
  hashed_password: '$2a$12$F3ChLyiBOye4.nSQyPNtK.0udpRDKZod5zlsCSFPFLN1JkYBznVrG',
  created_at: new Date('2016-12-08 12:15:45 UTC'),
  updated_at: new Date('2016-12-08 12:15:45 UTC')
}, {
  id: 2,
  user_name: 'Remus',
  email: 'remus2@fakegmail.com',
  hashed_password: '$2a$12$Wl6zn24NOWEkUg9JCMAfBumGQxZhqXI7HbuAnKuaEViwzGgUPjqs6',
  created_at: new Date('2016-12-08 12:20:00 UTC'),
  updated_at: new Date('2016-12-08 12:20:00 UTC')
}, {
  id: 3,
  user_name: 'Polaris',
  email: 'polaris3@fakeaol.com',
  hashed_password: '$2a$12$SLGSpfdCjaIAZhUQX.gWjeUiwW8ZaDRvigWTEcQQ91IFUxFUmVQTC',
  created_at: new Date('2016-12-08 12:25:30 UTC'),
  updated_at: new Date('2016-12-08 12:25:30 UTC')
}];

exports.seed = function(knex, Promise) {
    let seedPromises = users.map((user) => {
        return knex('users').insert(user)
    });
    return knex('users').del().then(() => {
        return Promise.all(seedPromises);
  	});
};
