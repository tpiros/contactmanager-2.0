exports.index = function(req, res) {
  res.render('index.html');
};

exports.p = function (req, res) {
  var name = req.params.name;
  res.render('p/' + name + '.html');
};