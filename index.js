const mineflayer = require('mineflayer')
const vec3 = require('vec3')

const bot = mineflayer.createBot({
  host: 'ir.skyblock.uz',
  port: 25566,
  username: 'Hello'
})
bot.once("spawn", () => {
    bot.chat("/login aaaaaaaaaaaa");
   
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)

bot.on('physicTick', lookAtNearestPlayer)
