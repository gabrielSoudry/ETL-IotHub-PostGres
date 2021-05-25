# ETL-IotHub-PostGres
Extract event from IoT Hub and insert into PostGres Db

# :whale: Installation using Docker

You will need fist to setup several env variables in a file local.settings.json (root folder)

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "DefaultEndpointsProtocol=https;AccountName=testazurestoragea....",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "CONNECTION_IOT_HUB": "Endpoint=sb://iothub-ns-iothub-tes...",
    "PG_DATABASE": "postgres",
    "PG_HOST": "name of host",
    "PG_PASSWORD": "password",
    "PG_PORT": "port",
    "PG_USER": "user"
  }
}
```

And then you can run it using Docker: 

```
$ docker build . -t "nameofthecontainer"  
```

```
$ docker run nameofthecontainer 
```
You can also pull the latest version : [DockerHub](https://hub.docker.com/repository/docker/gabi22top/typeazurefunctionstypescriptimage)
