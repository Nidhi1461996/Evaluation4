const Server = require('./server');

describe('test the server', () => {
  test('checking the  status code to be 200', (done) => {
    Server.inject('/', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

describe('test the questions api', () => {
  test('checking the  status code to be 200', (done) => {
    Server.inject('/questions', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('checking the  result', (done) => {
    Server.inject('/questions', (response) => {
      const result = [{
        id: 12,
        question: 'What is the capital of India',
        options: {
          option1: 'New Delhi', option2: 'MP', option3: 'UP', option4: 'Bangalore',
        },
        answer: 'New Delhi',
      }, {
        id: 23,
        question: 'What is the capital of Afghanistan',
        options: {
          option1: 'Kabul', option2: 'Tirana', option3: 'Algiers', option4: 'Andorra la Vella',
        },
        answer: 'Kabul',
      }, {
        id: 45,
        question: 'What is the capital of Marshall Islands',
        options: {
          option1: 'Kabul', option2: 'Antananarivo', option3: 'Majuro', option4: 'Andorra la Vella',
        },
        answer: 'Majuro',
      }, {
        id: 56,
        question: 'What is the capital of Micronesia',
        options: {
          option1: 'Palikir', option2: 'Antananarivo', option3: 'Majuro', option4: 'Andorra la Vella',
        },
        answer: 'Palikir',
      }, {
        id: 67,
        question: 'What is the capital of Monaco',
        options: {
          option1: 'Palikir', option2: 'Monaco', option3: 'Majuro', option4: 'Andorra la Vella',
        },
        answer: 'Majuro',
      }, {
        id: 78,
        question: 'What is the capital of Micronesia',
        options: {
          option1: 'Palikir', option2: 'Antananarivo', option3: 'Majuro', option4: 'Andorra la Vella',
        },
        answer: 'Palikir',
      }, {
        id: 89,
        question: 'What is the capital of Montenegro',
        options: {
          option1: 'Podgorica', option2: 'Antananarivo', option3: 'Majuro', option4: 'Andorra la Vella',
        },
        answer: 'Podgorica',
      }, {
        id: 90,
        question: 'What is the capital of Namibia',
        options: {
          option1: 'Palikir', option2: 'Antananarivo', option3: 'Windhoek', option4: 'Naypyidaw',
        },
        answer: 'Windhoek',
      }, {
        id: 102,
        question: 'What is the capital of Nigeria',
        options: {
          option1: 'Abuja', option2: 'Antananarivo', option3: 'Majuro', option4: 'Warsaw',
        },
        answer: 'Abuja',
      }, {
        id: 120,
        question: 'What is the capital of Oman',
        options: {
          option1: 'Palikir', option2: 'Muscat', option3: 'Majuro', option4: 'Warsaw',
        },
        answer: 'Muscat',
      }, {
        id: 123,
        question: 'What is the capital of Palau',
        options: {
          option1: 'Palikir', option2: 'Antananarivo', option3: 'Ngerulmud', option4: 'Warsaw',
        },
        answer: 'Ngerulmud',
      }, {
        id: 34,
        question: 'What is the capital of Madagascar',
        options: {
          option1: 'Kabul', option2: 'Antananarivo', option3: 'Algiers', option4: 'Andorra la Vella',
        },
        answer: 'Antananarivo',
      }];
      expect(response.result).toEqual(result);
      done();
    });
  });
});
