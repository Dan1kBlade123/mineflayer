const mineflayer = require('mineflayer')
const vec3 = require('vec3')

const bot = mineflayer.createBot({
  host: 'ir.skyblock.uz',
  port: 25566,
  username: 'Sinako_Miner'
})
bot.once("spawn", () => {
    bot.chat("/login MinerSinako");
    bot.chat('/tell Sinako_Gm dig');
   
})

bot.on('chat', (username, message) => {
  if (username === 'Sinako_Gm') {if (message.indexOf('@') !== -1) {
    var replacement = "@",
        toReplace = "",
        str = message

    str = str.replace(replacement, toReplace)
    bot.chat(str)
}
  }})
  bot.on('chat', (username, message) => {
    if (username === 'MineCrafter') {if (message.indexOf('@') !== -1) {
      var replacement = "@",
          toReplace = "",
          str = message
  
      str = str.replace(replacement, toReplace)
      bot.chat(str)
  }
    }})
    bot.on('chat', (username, message) => {
      if (username === 'Zedloop') {if (message.indexOf('@') !== -1) {
        var replacement = "@",
            toReplace = "",
            str = message
    
        str = str.replace(replacement, toReplace)
        bot.chat(str)
    }
      }})
      bot.on('chat', (username, message) => {
        if (username === 'Sobirov777888') {if (message.indexOf('@') !== -1) {
          var replacement = "@",
              toReplace = "",
              str = message
      
          str = str.replace(replacement, toReplace)
          bot.chat(str)
      }
        }})
    function lookAtNearestPlayer () {
      const playerFilter = (entity) => entity.type === 'player'
      const playerEntity = bot.nearestEntity(playerFilter)
      
    
    }
    bot.on('chat', async (username, message) => {
      if (username === bot.username) return
      if (username === 'Sinako_Gm')
      switch (message) {
        case 'loaded':
          await bot.waitForChunksToLoad()
          bot.chat('Ready!')
          break
        case 'list':
          sayItems()
          break
        case 'dig':
          dig()
          break
        case 'build':
          build()
          break
        case 'equip dirt':
          equipDirt()
          break
      }
    })

    function sayItems (items = bot.inventory.items()) {
      const output = items.map(itemToString).join(', ')
      if (output) {
        bot.chat(output)
      } else {
        bot.chat('empty')
      }
    }

    async function dig() {
      if (!bot.heldItem || !bot.heldItem.name.includes('pickaxe')) {
        var pickaxe = bot.inventory.items().filter(i => i.name.includes('pickaxe'))[0];
        if (pickaxe) await bot.equip(pickaxe, 'hand')
        if(!pickaxe) bot.quit(); 
      }
      target = bot.blockAt(bot.entity.position.offset(0, -1, 0))
      if (target && bot.canDigBlock(target)) {
      var block = bot.blockAtCursor(9);
      if (!block) return setTimeout(function() {
        dig();
      }, 900);
      await bot.dig(block, 'ignore', 'raycast')
      dig()
    }}
    

    function itemToString (item) {
      if (item) {
        return `${item.name} x ${item.count}`
      } else {
        return '(nothing)'
      }
    }

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)

bot.on('physicTick', lookAtNearestPlayer)