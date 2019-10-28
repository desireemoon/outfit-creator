import express from 'express' // <- this import is special for this file
import { Router } from 'express'
import { Article, Outfit, OutfitArticle } from './models'

const getAllArticles = async (
        /** @type {express.Request} */  req,    // <-the type annotation for the request argument
        /** @type {express.Response}*/  res     // <-the type annotation for the response argument
        ) => {
        try {
            const articles = await Article.findAll()
            return res.status(200).json({articles})
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

const getAllOutfits = async (
            /** @type {express.Request} */  req,    // <-the type annotation for the request argument
            /** @type {express.Response}*/  res     // <-the type annotation for the response argument
            ) => {
            try {
                const outfits = await Outfit.findAll(
                    {
                    include: [
                        {
                        model: Article
                    }
                ]
                 }
            )
                return res.status(200).json({outfits})
            } catch (error) {
                return res.status(500).send(error.message)
            }
        }

const getArticleById = async (req,res) => {
        try {
            const id = req.params.id;
            const article = await Article.findAll({
                where: {id: id}
            })
            if (article) {
                return res.status(200).json({article})
            }
            return res.status(404).send('Article with the specified ID does not exists');
        } catch(error) {
            return res.status(500).send(error.message)
        }
    }
    
const getOutfitById = async (req,res) => {
    try {
        const id = req.params.id;
        console.log(id);
        
        const outfit = await Outfit.findOne(
            {
                where: {id: parseInt(id)},
                include: [
                    {
                        model: Article
                    }
                ]
            }
    )
        if (outfit) {
            return res.status(200).json({outfit})
        }
        return res.status(404).send('Outfit with the specified ID does not exists');
    } catch(error) {
        return res.status(500).send(error.message)
    }
}

const getArticleByName = async (req,res) => {
    try {
        const name = req.params.name;
        const article = await Article.findAll({
            where: {name: name}
        })
        if (article) {
            return res.status(200).json({article})
        }
        return res.status(404).send('Article with the specified ID does not exists');
    } catch(error) {
        return res.status(500).send(error.message)
    }
}

const getOutfitByName = async (req,res) => {
try {
    const name = req.params.name;
    console.log(name);
    
    const outfit = await Outfit.findOne(
        {
            where: {name: name},
            include: [
                {
                    model: Article
                }
            ]
        }
)
    if (outfit) {
        return res.status(200).json({outfit})
    }
    return res.status(404).send('Outfit with the specified ID does not exists');
} catch(error) {
    return res.status(500).send(error.message)
}
}

const createArticle = async (req, res) => {
        try {
            const article = await Article.create(req.body)
            return res.status(201).json({
                article
            })
        } catch(error) {
            return res.status(500).send(error.message)
        }
    }

    // looked at this for help https://medium.com/@tonyangelo9707/many-to-many-associations-using-sequelize-941f0b6ac102
const createOutfit = async (req, res) => {
    try {
        const outfit = await Outfit.create(req.body)
        req.body.articles.forEach( async article => {
             const newArticle = await Article.findByPk(article.id)
            if(!newArticle) {
                return res.status(400)
            }

            const oa = {
                outfit_id: outfit.id,
                article_id: article.id
            }
            console.log(oa)
        const outfitArticle = await OutfitArticle.create(oa)
        });
        return res.status(201).json({
            outfit
        })
    } catch(error) {
        return res.status(500).send(error)
    }
}

const updateArticle = async (req,res) => {
        try {
            const updated = await Article.update(req.body, {
                where: { id: req.params.id }
            });
            if (updated) {
                const updatedArticle = await Article.findOne({ where: { id: req.params.id } });
                return res.status(200).json({ updatedArticle });
            }
            throw new Error('Item not found');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    };
    
const updateOutfit = async (req,res) => {
        try {
            const updated = await Outfit.update(req.body, {
                where: { id: req.params.id }
            });
            if (updated) {
                const updatedOutfit = await Outfit.findOne({ where: { id: req.params.id } });
                return res.status(200).json({ updatedOutfit });
            }
            throw new Error('Item not found');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    };

const addArticleToOutfit = async (req, res) => {
    try {
        const outfitWithArticles = await Outfit.findOne({
            where: { id: req.params.outfit_id },
            include: [Article]
        });
        if (outfitWithArticles.Articles.find( art => art.id===req.params.id)) {
                res.status(400)
        } 
        const article = await Article.findByPk(req.params.id)
        await outfitWithArticles.addArticle(article)
        // grab Article with id from req.perams.id 
        //outfit.addArticle(_)
        //return new outfit
        const newOutfit = await Outfit.findOne({
            where: { id: req.params.outfit_id },
            include: [Article]
        });
        res.json(newOutfit);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

const deleteArticleFromOutfit = async (req, res) => {
    try {
        const outfitWithArticles = await Outfit.findOne({
            where: { id: req.params.outfit_id },
            include: [Article]
        });
        if (!outfitWithArticles.Articles.find( art => art.id===req.params.id)) {
            res.status(400).send('Article not in outfit!');
        } 
        const article = await Article.findByPk(req.params.id)
        await outfitWithArticles.removeArticle(article)
        // grab Article with id from req.perams.id 
        //outfit.addArticle(_)
        //return new outfit
        const newOutfit = await Outfit.findOne({
            where: { id: req.params.outfit_id },
            include: [Article]
        });
        res.json(newOutfit);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

const deleteArticle = async (req, res) => {
try {
    const id = req.params.id
    const deleted = await Article.destroy({
        where: {id:id}
    })
    if (deleted) {
        return res.status(200).send('Article deleted')
    }
    throw new Error('Article not found')
} catch(error) {
    res.status(500).send(error.message)
}
}

const deleteOutfit = async (req, res) => {
    try {
        const id = req.params.id
        const deleted = await Outfit.destroy({
            where: {id:id}
        })
        if (deleted) {
            return res.status(200).send('Outfit deleted')
        }
        throw new Error('Outfit not found')
    } catch(error) {
        res.status(500).send(error.message)
    }
}

export const closetRouter = Router()

closetRouter.get("/articles", getAllArticles)
closetRouter.get("/outfits", getAllOutfits)

closetRouter.get("/articles/:id", getArticleById)
closetRouter.get("/outfits/:id", getOutfitById)

closetRouter.get("/articles/:name", getArticleByName)
closetRouter.get("/outfits/:name", getOutfitByName)

closetRouter.post("/articles", createArticle)
closetRouter.post("/outfits", createOutfit)

closetRouter.put("/articles/:id", updateArticle)
closetRouter.put("/outfits/:id", updateOutfit)

closetRouter.put("/outfits/:outfit_id/articles/add/:id", addArticleToOutfit);
closetRouter.put("/outfits/:outfit_id/articles/remove/:id", deleteArticleFromOutfit);

closetRouter.delete("/articles/:id", deleteArticle)
closetRouter.delete("/outfits/:id", deleteOutfit)




