import express from 'express' // <- this import is special for this file
import { Router } from 'express'
import { Hat, Shirt, Outfit } from './models'

const getAllHats = async (
    /** @type {express.Request} */  req,    // <-the type annotation for the request argument
    /** @type {express.Response}*/  res     // <-the type annotation for the response argument
    ) => {
    try {
        const hats = await Hat.findAll()
        return res.status(200).json({hats})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getAllShirts = async (
    /** @type {express.Request} */  req,    // <-the type annotation for the request argument
    /** @type {express.Response}*/  res     // <-the type annotation for the response argument
    ) => {
    try {
        const hats = await Hat.findAll()
        return res.status(200).json({hats})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getAllOutfits = async (
    /** @type {express.Request} */  req,    // <-the type annotation for the request argument
    /** @type {express.Response}*/  res     // <-the type annotation for the response argument
    ) => {
    try {
        const outfits = await Outfit.findAll({
            include: [{
                model: Article
        }]
    })
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
        const outfit = await Outfit.findAll({
            where: {id: id}
        })
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
        return res.status(201).json({new:{
            article
        }})
    } catch(error) {
        return res.status(500).send(error.message)
    }
}

const createOutfit = async (req, res) => {
    try {
        const outfit = await Outfit.create(req.body)
        return res.status(201).json({new:{
            outfit
        }})
    } catch(error) {
        return res.status(500).send(error.message)
    }
}

const updateArticle = async (req,res) => {
    try {
        const updated = await Article.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedArticle = await Article.findOne({ where: { id: req.params.id } });
            return res.status(200).json({ article: updatedArticle });
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
            return res.status(200).json({ article: updatedOutfit });
        }
        throw new Error('Item not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

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
closetRouter.get("/articles/id/:id", getArticleById)
closetRouter.get("/outfits/id/:id", getOutfitById)
closetRouter.post("/articles", createArticle)
closetRouter.post("/outfits", createOutfit)
closetRouter.put("/articles/id/:id", updateArticle)
closetRouter.put("/outfits/id/:id", updateOutfit)
closetRouter.delete("/articles/id/:id", deleteArticle)
closetRouter.delete("/outfits/id/:id", deleteOutfit)

