const socketIO = require('socket.io');
const socketEvents = require('./socketEvents');

const mapUserToSocket = {}

module.exports = function (server) {
    
    const io = socketIO(server);

    io.on('connection', (socket) => {
        console.log('A client connected to server');

        socket.on(socketEvents.THIS_USER_GOES_ONLINE, ({ rooms, userId }) => {
            rooms.forEach(roomId => socket.join(roomId));
            mapUserToSocket[userId] = socket;
            
            console.log('======================================');
            console.log('ONLINE:');
            Object.keys(mapUserToSocket).map(user => console.log(user, mapUserToSocket[user] && mapUserToSocket[user].id));
            console.log('======================================');
        });

        socket.on(socketEvents.THIS_USER_GOES_OFFLINE, ({ userId }) => {
            socket.leaveAll();
            mapUserToSocket[userId] = undefined;
            console.log('======================================');
            console.log('OFFLINE:');
            Object.keys(mapUserToSocket).map(user => console.log(user, mapUserToSocket[user] && mapUserToSocket[user].id));
            console.log('======================================');
        });

        socket.on(socketEvents.THIS_USER_SENDS_MESSAGE, ({ message, roomId, partnerFullName, partnerUsername, profileImage }) => {
            socket.broadcast.to(roomId).emit(socketEvents.A_USER_SENDS_MESSAGE, {
                message,
                roomId,
                partnerFullName,
                partnerUsername,
                profileImage
            });
        });

        socket.on(socketEvents.THIS_USER_INVITES, ({ roomId, partnerId }) => {
            mapUserToSocket[partnerId].join(roomId);
            socket.join(roomId);
        });

    });

}