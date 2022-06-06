# Game-Server-API

Check your game server in web-browser without entering or installing the game.

# Install

```bash
#clone the repository
$ git clone https://github.com/krepowo/Game-Server-API.git 

#change directory
$ cd Game-Server-API

#install dependencies
$ npm install

#start the API
$ npm start
```
Default port is 3000, you can change it in config.json.
```json
{
    "port": "3000"
}
```

# How to use
Base url: http://localhost:3000/

| Method | Endpoints | Params           | Return             |
| ------ | --------- | ---------------- | ------------------ |
| `GET`  | `/`       | `game, ip, port` | server info object |

Example:
```
#Minecraft Bedrock Edition/Pocket Edition
http://localhost:3000/?game=minecraftpe&ip=play.venitymc.com&port=19132
```
Port parameter is optional depending on the game.
```
#Minecraft Java Edition
http://localhost:3000/?game=minecraft&ip=play.hypixel.net
```
# List of supported games

[Here](https://github.com/gamedig/node-gamedig#games-list)
