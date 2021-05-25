import { AzureFunction, Context } from "@azure/functions"
import { Client } from 'pg';

const client = new Client(
    {
        host: process.env.PG_HOST,
        port: parseInt(process.env.PG_PORT),
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
        ssl: require
    }
)
client.connect()

interface RevPiMessage {
    temperature?: string;
    count?: string;
}

const IoTHubTrigger: AzureFunction = async function (context: Context, IoTHubMessages: RevPiMessage[]): Promise<void> {
    context.log(`Eventhub trigger function called for message array: ${IoTHubMessages}`);
    
    IoTHubMessages.forEach(message => {
        context.log(`Processed message: ${message}`);
        context.log(message.count)
        let query = 'INSERT INTO revpidata (deviceid, temperature) VALUES (1,+'+message.count+')';
        client.query(query);
        client.query("COMMIT");
    });
};

export default IoTHubTrigger;
