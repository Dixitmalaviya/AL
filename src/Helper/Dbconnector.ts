import mongoose from "mongoose";


export default (database: string) => {
    const connect = () => {
        mongoose.connect(database, {}).then(() => {
            console.log(`Database connection successful.....`);
            // insertFoammaterialFilter()

        }).catch((error) => {
            console.log('Unable to connect to the db: ' + error.message);
            return
        })
    }
    connect()
    mongoose.connection.on('disconnected', () => {
        console.log(`Db disconnected`)
    })
}