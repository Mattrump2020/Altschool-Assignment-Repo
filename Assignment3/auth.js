let users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

function authenticate(req) {
    return new Promise((resolve, reject) => {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            reject(new Error('Unauthorized'));
        }

        const base64Credentials = authHeader.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [username, password] = credentials.split(':');

        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            resolve(user);
        } else {
            reject(new Error('Unauthorized'));
        }
    });
}

module.exports = {
    authenticate
};
