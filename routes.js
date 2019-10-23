import express from 'express' // <- this import is special for this file
import { Router } from 'express'
import { Hat, Shirt, Article, Outfit } from './models'

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
export const closetRouter = Router()

closetRouter.get("/articles", getAllArticles)
closetRouter.get("/outfits", getAllOutfits)

closetRouter.get("/articles/id/:id", getArticleById)
closetRouter.get("/outfits/id/:id", getOutfitById)

// const getAllHats = async (
//     /** @type {express.Request} */  req,    // <-the type annotation for the request argument
//     /** @type {express.Response}*/  res     // <-the type annotation for the response argument
//     ) => {
//     try {
//         const hats = await Hat.findAll()
//         return res.status(200).json({hats})
//     } catch (error) {
//         return res.status(500).send(error.message)
//     }
// }

// const getAllShirts = async (
//     /** @type {express.Request} */  req,    // <-the type annotation for the request argument
//     /** @type {express.Response}*/  res     // <-the type annotation for the response argument
//     ) => {
//     try {
//         const hats = await Hat.findAll()
//         return res.status(200).json({hats})
//     } catch (error) {
//         return res.status(500).send(error.message)
//     }
// }

// const getAllOutfits = async (
//     /** @type {express.Request} */  req,    // <-the type annotation for the request argument
//     /** @type {express.Response}*/  res     // <-the type annotation for the response argument
//     ) => {
//     try {
//         const outfits = await Outfit.findAll(
//             {
//             include: [
//                 {
//                 model: Hat
//             },
//             {
//                 model: Shirt
//             },
//         ]
//          }
//     )
//         return res.status(200).json({outfits})
//     } catch (error) {
//         return res.status(500).send(error.message)
//     }
// }

// const getHatById = async (req,res) => {
//     try {
//         const id = req.params.id;
//         const hat = await Hat.findAll({
//             where: {id: id}
//         })
//         if (hat) {
//             return res.status(200).json({hat})
//         }
//         return res.status(404).send('Hat with the specified ID does not exists');
//     } catch(error) {
//         return res.status(500).send(error.message)
//     }
// }

// const getShirtById = async (req,res) => {
//     try {
//         const id = req.params.id;
//         const shirt = await Shirt.findAll({
//             where: {id: id}
//         })
//         if (shirt) {
//             return res.status(200).json({shirt})
//         }
//         return res.status(404).send('Shirt with the specified ID does not exists');
//     } catch(error) {
//         return res.status(500).send(error.message)
//     }
// }

// const getOutfitById = async (req,res) => {
//     try {
//         const id = req.params.id;
//         console.log(id);
        
//         const outfit = await Outfit.findOne(
//             {
//                 where: {id: parseInt(id)},
//                 include: [
//                     {
//                         model: Hat
//                     },
//                     {
//                         model: Shirt
//                     },
//                 ]
//             }
//     )
//         if (outfit) {
//             return res.status(200).json({outfit})
//         }
//         return res.status(404).send('Outfit with the specified ID does not exists');
//     } catch(error) {
//         return res.status(500).send(error.message)
//     }
// }

// const getHatByName = async (req,res) => {
//     try {
//         const name = req.params.name;
//         const hat = await Hat.findAll({
//             where: {name: name}
//         })
//         if (hat) {
//             return res.status(200).json({hat})
//         }
//         return res.status(404).send('Hat with the specified name does not exists');
//     } catch(error) {
//         return res.status(500).send(error.message)
//     }
// }

// const getShirtByName = async (req,res) => {
//     try {
//         const name = req.params.name;
//         const shirt = await Shirt.findAll({
//             where: {name: name}
//         })
//         if (shirt) {
//             return res.status(200).json({shirt})
//         }
//         return res.status(404).send('Shirt with the specified name does not exists');
//     } catch(error) {
//         return res.status(500).send(error.message)
//     }
// }

// const getOutfitByName = async (req,res) => {
//     try {
//         const name = req.params.name;
//         const outfit = await Outfit.findAll(
//             {
//                 where: {name: name},
//                 include: [
//                     {
//                         model: Hat
//                     },
//                     {
//                         model: Shirt
//                     },
//                 ]
//             }

//     )
//         if (outfit) {
//             return res.status(200).json({outfit})
//         }
//         return res.status(404).send('Outfit with the specified ID does not exists');
//     } catch(error) {
//         return res.status(500).send(error.message)
//     }
// }

// const createHat = async (req, res) => {
//     try {
//         const hat = await Hat.create(req.body)
//         return res.status(201).json({new:{
//             hat
//         }})
//     } catch(error) {
//         return res.status(500).send(error.message)
//     }
// }

// const createShirt = async (req, res) => {
//     try {
//         const shirt = await Shirt.create(req.body)
//         return res.status(201).json({new:{
//             shirt
//         }})
//     } catch(error) {
//         return res.status(500).send(error.message)
//     }
// }

// const createOutfit = async (req, res) => {
//     try {
//         const outfit = await Outfit.create(req.body)
//         return res.status(201).json({new:{
//             outfit
//         }})
//     } catch(error) {
//         return res.status(500).send(error.message)
//     }
// }

// const updateHat = async (req,res) => {
//     try {
//         const updated = await Hat.update(req.body, {
//             where: { id: req.params.id }
//         });
//         if (updated) {
//             const updatedHat = await Hat.findOne({ where: { id: req.params.id } });
//             return res.status(200).json({ hat: updatedHat });
//         }
//         throw new Error('Item not found');
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// };

// const updateShirt = async (req,res) => {
//     try {
//         const updated = await Shirt.update(req.body, {
//             where: { id: req.params.id }
//         });
//         if (updated) {
//             const updatedShirt = await Shirt.findOne({ where: { id: req.params.id } });
//             return res.status(200).json({ shirt: updatedShirt });
//         }
//         throw new Error('Item not found');
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// };


// const updateOutfit = async (req,res) => {
//     try {
//         const updated = await Outfit.update(req.body, {
//             where: { id: req.params.id }
//         });
//         if (updated) {
//             const updatedOutfit = await Outfit.findOne({ where: { id: req.params.id } });
//             return res.status(200).json({ article: updatedOutfit });
//         }
//         throw new Error('Item not found');
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// };

// const deleteArticle = async (req, res) => {
//     try {
//         const id = req.params.id
//         const deleted = await Article.destroy({
//             where: {id:id}
//         })
//         if (deleted) {
//             return res.status(200).send('Article deleted')
//         }
//         throw new Error('Article not found')
//     } catch(error) {
//         res.status(500).send(error.message)
//     }
// }

// const deleteOutfit = async (req, res) => {
//     try {
//         const id = req.params.id
//         const deleted = await Outfit.destroy({
//             where: {id:id}
//         })
//         if (deleted) {
//             return res.status(200).send('Outfit deleted')
//         }
//         throw new Error('Outfit not found')
//     } catch(error) {
//         res.status(500).send(error.message)
//     }
// }

// export const closetRouter = Router()

// closetRouter.get("/hats", getAllHats)
// closetRouter.get("/shirts", getAllShirts)
// closetRouter.get("/outfits", getAllOutfits)

// closetRouter.get("/hats/id/:id", getHatById)
// closetRouter.get("/shirts/id/:id", getShirtById)
// closetRouter.get("/outfits/id/:id", getOutfitById)

// closetRouter.get("/hats/name/:name", getHatByName)
// closetRouter.get("/shirts/name/:name", getShirtByName)
// closetRouter.get("/outfits/name/:name", getOutfitByName)

// closetRouter.post("/hats", createHat)
// closetRouter.post("/shirts", createShirt)
// closetRouter.post("/outfits", createOutfit)

// closetRouter.put("/articles/id/:id", updateArticle)
// closetRouter.put("/outfits/id/:id", updateOutfit)
// closetRouter.delete("/articles/id/:id", deleteArticle)
// closetRouter.delete("/outfits/id/:id", deleteOutfit)


