const fs = require('fs')

exports.run = (client, msg, args) => {
    console.log('args', args[1])
    fs.writeFile(__dirname + '/../tmp/file.vue', args[1], err => {
        if(err) throw err
        console.log('file writed!')
        fs.readFile(__dirname + '/../tmp/file.vue', (err, data) => {
            console.log(data)
            msg.channel.sendFile(data, 'file.vue', 'Ta aí')
        })
    })

    
}