import { Hat, Shirt, Outfit } from './models'


const main = async () => {
    await Hat.sync({force:true})
    await Shirt.sync({force:true})
    await Outfit.sync({force:true})
    process.exit()
} 

main()