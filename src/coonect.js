// https://cloud.mongodb.com/v2/626efd9c4f6e60024ec97425#metrics/replicaSet/626eff2218b56a3613ccded2/explorer/bookdb/bookcollection/find
const {MongoClient} = require('mongodb');

 
async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri ="mongodb+srv://admin:admin@mountain.atqlzne.mongodb.net/test";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log(" connection happened here")
 
        
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
        console.log( "We closed the connection ")
    }
}

main();