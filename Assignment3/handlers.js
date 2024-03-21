function handleBooks(req) {
    return new Promise((resolve, reject) => {
        if (req.method === 'GET') {
            resolve({ message: 'GET books endpoint' });
        } else if (req.method === 'POST') {
            resolve({ message: 'POST books endpoint' });
        } else if (req.method === 'PUT') {
            resolve({ message: 'PUT books endpoint' });
        } else if (req.method === 'PATCH') {
            resolve({ message: 'PATCH books endpoint' });
        } else if (req.method === 'DELETE') {
            resolve({ message: 'DELETE books endpoint' });
        } else {
            reject(new Error('Method not supported'));
        }
    });
}

function handleAuthors(req) {
    return new Promise((resolve, reject) => {
        if (req.method === 'GET') {
            resolve({ message: 'GET authors endpoint' });
        } else if (req.method === 'POST') {
            resolve({ message: 'POST authors endpoint' });
        } else if (req.method === 'PUT') {
            resolve({ message: 'PUT authors endpoint' });
        } else if (req.method === 'PATCH') {
            resolve({ message: 'PATCH authors endpoint' });
        } else if (req.method === 'DELETE') {
            resolve({ message: 'DELETE authors endpoint' });
        } else {
            reject(new Error('Method not supported'));
        }
    });
}

module.exports = {
    handleBooks,
    handleAuthors
};
