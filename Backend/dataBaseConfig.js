let mongoose = require('mongoose')

const connection = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb+srv://sumit:s1234@sumit123.3uuc687.mongodb.net/?retryWrites=true&w=majority&appName=sumit123")
        
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}
module.exports = connection