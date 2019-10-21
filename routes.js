import express from 'express' // <- this import is special for this file
import { Router } from 'express'
import { Article, Outfit } from './models'

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
        const outfits = await Outfit.findAll()
        return res.status(200).json({outfits})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

export const closetRouter = Router()

closetRouter.get("/articles", getAllArticles)
closetRouter.get("/outfits", getAllOutfits)