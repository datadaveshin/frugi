"use strict";

// Require
const expect = require('chai').expect;
const knex = require('knex');
const supertest = require('supertest');
const app = require('../app');

// Test Chai itself
describe("Test Chai", () => {
    it("should return true for true===true", () => {
        expect(true === true).to.be.true;
    });
    it("should return false for false===true", () => {
        expect(false === true).to.be.false;
    });
});

// Test GET to simply return test from a test route
xdescribe("Test GET route to return JSON from a *former* Index page", () => {
    it("should return 200", done => {
        supertest(app)
        .get('/')
        .expect(200)
        .end((err, res) => {
            if (err) {return done(err)}
            done();
        });
    })

    it("should return json", done => {
        supertest(app)
        .get('/')
        .expect('Content-type', /json/)
        .end((err, res) => {
            if (err) {return done(err)}
            done();
        });
    });

    it("should deep equal json contents", done => {
        supertest(app)
        .get('/')
        .end((err, res) => {
            if (err) {return done(err)}
            expect(res.body).to.be.deep.equal({Babu: 'Babu'})
            done();
        });
    });
});

// Test GET to simply return test from a test route
describe("Test GET route to index", () => {
    it("should return 200", done => {
        supertest(app)
        .get('/')
        .expect(200)
        .end((err, res) => {
            if (err) {return done(err)}
            done();
        });
    })

    it("should return html", done => {
        supertest(app)
        .get('/')
        .expect('Content-type', /html/)
        .end((err, res) => {
            if (err) {return done(err)}
            done();
        });
    });

    it("should deep equal json contents", done => {
        supertest(app)
        .get('/')
        .end((err, res) => {
            if (err) {return done(err)}
            expect(res.body).to.be.deep.equal({})
            done();
        });
    });
});

// Test GET to simply return test from a test route
describe("Test GET route to about", () => {
    it("should return 200", done => {
        supertest(app)
        .get('/about')
        .expect(200)
        .end((err, res) => {
            if (err) {return done(err)}
            done();
        });
    })

    it("should return html", done => {
        supertest(app)
        .get('/about')
        .expect('Content-type', /html/)
        .end((err, res) => {
            if (err) {return done(err)}
            done();
        });
    });

    it("should deep equal json contents", done => {
        supertest(app)
        .get('/about')
        .end((err, res) => {
            if (err) {return done(err)}
            expect(res.body).to.be.deep.equal({})
            done();
        });
    });
});


// Test GET to simply return test from a test route
describe("Test GET route to contact", () => {
    it("should return 200", done => {
        supertest(app)
        .get('/contact')
        .expect(200)
        .end((err, res) => {
            if (err) {return done(err)}
            done();
        });
    })

    it("should return html", done => {
        supertest(app)
        .get('/contact')
        .expect('Content-type', /html/)
        .end((err, res) => {
            if (err) {return done(err)}
            done();
        });
    });

    it("should deep equal json contents", done => {
        supertest(app)
        .get('/contact')
        .end((err, res) => {
            if (err) {return done(err)}
            expect(res.body).to.be.deep.equal({})
            done();
        });
    });
});
