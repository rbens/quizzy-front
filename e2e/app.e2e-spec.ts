import { QuizzyQuizFrontPage } from './app.po';

describe('quizzy-quiz-front App', function() {
  let page: QuizzyQuizFrontPage;

  beforeEach(() => {
    page = new QuizzyQuizFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
