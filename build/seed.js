"use strict";

var _models = require("./models");

const seedTest = async () => {
  const firstShirt = await _models.Article.create({
    name: "first shirt",
    creator: "Nathan",
    type: "shirt",
    color: "",
    fabric: "",
    brand: "",
    url: "https://www.amazon.com/Goodthreads-Standard-Fit-Long-Sleeve-Large-Scale-Depths/dp/B073VLNK9J/ref=sxin_0_pb?keywords=shirt&pd_rd_i=B073VLNK9J&pd_rd_r=2f3ff190-e0ed-4f01-82bd-0ac2369e71e5&pd_rd_w=eU3yo&pd_rd_wg=1r6UP&pf_rd_p=50bbfd25-5ef7-41a2-86d6-74d854b30e30&pf_rd_r=CHVHKZWW3TZ3EF19R2DS&qid=1571695653",
    imgUrl: ""
  });
  const firstPants = await _models.Article.create({
    name: "first pants",
    creator: "Nathan",
    type: "pants",
    color: "",
    fabric: "",
    brand: "",
    url: "https://www.amazon.com/dp/B07L62GLD1/ref=sspa_dk_detail_3?psc=1&pd_rd_i=B07L62GLD1&pd_rd_w=E11IO&pf_rd_p=c83c55b0-5d97-454a-a592-a891098a9709&pd_rd_wg=qJQRG&pf_rd_r=V7ZA3RW5D2PWMPR4T2AJ&pd_rd_r=a04c9a4e-f19b-4ddf-992e-d1e7629d22ca&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExQlhTTFA0Q00xMVZYJmVuY3J5cHRlZElkPUEwNjMxOTA3TDdYRjhCSEtWMzUyJmVuY3J5cHRlZEFkSWQ9QTAxNjc2MDEySVNVMklEUVZUNjI4JndpZGdldE5hbWU9c3BfZGV0YWlsX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
    imgUrl: ""
  });
  const firstHat = await _models.Article.create({
    name: "first hat",
    creator: "Kenneth",
    type: "hat",
    color: "",
    fabric: "",
    brand: "",
    url: "https://www.adidas.com/us/colorblock-five-panel-hat/CL5309.html?cm_mmc=AdieSEM_Feeds-_-GoogleProductAds-_-NA-_-CL5309&cm_mmca1=US&cm_mmca2=NA&ds_rl=1257009&ds_rl=1256970&gclid=Cj0KCQjwrrXtBRCKARIsAMbU6bHY4aB52b-eqdTT2pJf6y0tsjRBIeGHsH2LBZhU3OGGrNFwsLSropsaAjCFEALw_wcB&gclsrc=aw.ds&kpid=CL5309&sourceid=543457011",
    imgUrl: ""
  });
  const firstOutfit = await _models.Outfit.create({
    name: "first outfit",
    creator: "Des"
  });
  const secondOutfit = await _models.Outfit.create({
    name: "second outfit",
    creator: "Lori"
  });
  const firstOA = await _models.OutfitArticle.create({
    article_id: 1,
    outfit_id: 1
  });
  const secondOA = await _models.OutfitArticle.create({
    article_id: 2,
    outfit_id: 1
  });
  const thirdOA = await _models.OutfitArticle.create({
    article_id: 3,
    outfit_id: 1
  });
};

seedTest();