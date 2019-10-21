import { Article, Outfit } from './models'


const main = async () => {
    await Article.sync({force:true})
    await Outfit.sync({force:true})
    process.exit()
} 

main()