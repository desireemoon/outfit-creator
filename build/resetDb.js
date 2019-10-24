"use strict";

var _models = require("./models");

const main = async () => {
  await _models.Article.sync({
    force: true
  });
  await _models.Outfit.sync({
    force: true
  });
  await _models.OutfitArticle.sync({
    force: true
  });
  process.exit();
};

main();