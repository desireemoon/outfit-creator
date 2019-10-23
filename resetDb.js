import { Hat, Shirt, Article, Outfit, OutfitArticle } from './models'


const main = async () => {
    // await Hat.sync({force:true})
    await Article.sync({force:true})
    // await Shirt.sync({force:true})
    await Outfit.sync({force:true})
    await OutfitArticle.sync({force:true})

    process.exit()
} 

main()