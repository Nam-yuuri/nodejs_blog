class NewsController {
  // GET news
  index(req, res) {
    res.render('news');
  }

  // [GET] /mews/:slug
  show(req, res) {
    res.send('News detail');
  }
}

module.exports = new NewsController();
