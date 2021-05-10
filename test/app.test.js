const request = require('supertest');

const app = require('../src/app');

describe('POST /palindrome', () => {
  it('using word "Rotator" expect is_palindrome equals to true', (done) => {
    request(app)
      .post('/palindrome')
      .send({ word: 'Rotator' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        is_palindrome: true
      }, done);
  });
});

describe('POST /palindrome', () => {
  it('using word "bob" expect is_palindrome equals to true', (done) => {
    request(app)
      .post('/palindrome')
      .send({ word: 'bob' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        is_palindrome: true
      }, done);
  });
});

describe('POST /palindrome', () => {
  it('using word "madam" expect is_palindrome equals to true', (done) => {
    request(app)
      .post('/palindrome')
      .send({ word: 'madam' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        is_palindrome: true
      }, done);
  });
});

describe('POST /palindrome', () => {
  it('using word "mAlAyAlam" expect is_palindrome equals to true', (done) => {
    request(app)
      .post('/palindrome')
      .send({ word: 'mAlAyAlam' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        is_palindrome: true
      }, done);
  });
});

describe('POST /palindrome', () => {
  it('using word "1" expect is_palindrome equals to true', (done) => {
    request(app)
      .post('/palindrome')
      .send({ word: '1' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        is_palindrome: true
      }, done);
  });
});

describe('POST /palindrome', () => {
  it('using phrase "Able was I, ere I saw Elba" expect is_palindrome equals to true', (done) => {
    request(app)
      .post('/palindrome')
      .send({ word: 'Able was I, ere I saw Elba' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        is_palindrome: true
      }, done);
  });
});

describe('POST /palindrome', () => {
  it('using phrase "Madam I’m Adam" expect is_palindrome equals to true', (done) => {
    request(app)
      .post('/palindrome')
      .send({ word: 'Madam I’m Adam' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        is_palindrome: true
      }, done);
  });
});

describe('POST /palindrome', () => {
  it('using phrase "Step on no pets." expect is_palindrome equals to true', (done) => {
    request(app)
      .post('/palindrome')
      .send({ word: 'Step on no pets.' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        is_palindrome: true
      }, done);
  });
});

describe('POST /palindrome', () => {
  it('using phrase "Top spot!" expect is_palindrome equals to true', (done) => {
    request(app)
      .post('/palindrome')
      .send({ word: 'Top spot!' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        is_palindrome: true
      }, done);
  });
});

describe('POST /palindrome', () => {
  it('using phrase "02/02/2020" expect is_palindrome equals to true', (done) => {
    request(app)
      .post('/palindrome')
      .send({ word: '02/02/2020' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        is_palindrome: true
      }, done);
  });
});

describe('POST /palindrome', () => {
  it('using word "xyz" expect is_palindrome equals to false', (done) => {
    request(app)
      .post('/palindrome')
      .send({ word: 'xyz' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        is_palindrome: false
      }, done);
  });
});

describe('POST /palindrome', () => {
  it('using word "elephant" expect is_palindrome equals to false', (done) => {
    request(app)
      .post('/palindrome')
      .send({ word: 'elephant' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        is_palindrome: false
      }, done);
  });
});

describe('POST /palindrome', () => {
  it('using word "Country" expect is_palindrome equals to false', (done) => {
    request(app)
      .post('/palindrome')
      .send({ word: 'Country' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        is_palindrome: false
      }, done);
  });
});

describe('POST /palindrome', () => {
  it('using word "Top . post!" expect is_palindrome equals to false', (done) => {
    request(app)
      .post('/palindrome')
      .send({ word: 'Top . post!' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        is_palindrome: false
      }, done);
  });
});

describe('POST /palindrome', () => {
  it('using word "Wonderful-fool" expect is_palindrome equals to false', (done) => {
    request(app)
      .post('/palindrome')
      .send({ word: 'Wonderful-fool' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        is_palindrome: false
      }, done);
  });
});

describe('POST /palindrome', () => {
  it('using word "Wild imagination!" expect is_palindrome equals to false', (done) => {
    request(app)
      .post('/palindrome')
      .send({ word: 'Wild imagination!' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        is_palindrome: false
      }, done);
  });
});
