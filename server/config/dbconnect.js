const {default: mongoose} = require('mongoose')
mongoose.set('strictQuery', false)

const dbConnect = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        if(conn.connection.readyState === 1) console.log('Database connection successfully')
        else console.log('Database is connecting')    
    }catch(error){
        console.log('Database connection failed');
        throw new Error(error)
    }
}

module.exports = dbConnect