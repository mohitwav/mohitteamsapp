import io from 'socket.io-client';
const sockets = io('https://video-chat-conference.onrender.com', { autoConnect: true, forceNew: true });
// const sockets = io('/');
export default sockets;
