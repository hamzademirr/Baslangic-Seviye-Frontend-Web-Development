const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello');
})

let lastColor = '#fff'

io.on('connection', (socket) => {
    console.log('bir kullanici baglandi');
    socket.emit('receive', lastColor);

    socket.on('newColor', (color) => {
        console.log(color);

        lastColor = color;
        // socket.broadcast.emit('receive', color); gonderici harincindekilerin etkilenmesi icin
        io.emit('receive', color);
    });

    socket.on('disconnect', () => {
        console.log('bir kullanici ayrildi');
    });
});

http.listen(3001, () => console.log('server started'));