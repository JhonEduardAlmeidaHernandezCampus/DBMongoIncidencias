import { MongoClient } from 'mongodb';
import { my_connect } from '../variables/variables.js';

export async function con() {
    try {
        let url = `mongodb+srv://${my_connect.user}:${my_connect.password}@cluster0.rpldcx9.mongodb.net/${my_connect.database}`
        let options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }

        let client = await MongoClient.connect(url, options)
        return client.db()

    } catch (error) {
        return { status: 400, message: error.message}
    }
}