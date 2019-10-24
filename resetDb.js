import { Article, Outfit, OutfitArticle } from './models'


const main = async () => {
    await Article.sync({force:true})
    await Outfit.sync({force:true})
    await OutfitArticle.sync({force:true})

    process.exit()
} 

main()