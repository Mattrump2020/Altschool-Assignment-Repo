const express = require('express');
const router = express.Router();

// Authors
let authors = [
    { id: 1, name: 'Author 1' },
    { id: 2, name: 'Author 2' },
    { id: 3, name: 'Author 3' }
];

// CRUD endpoints for authors
router.get('/', (req, res) => {
    res.json(authors);
});

router.post('/', (req, res) => {
    const { id, name } = req.body;
    authors.push({ id, name });
    res.status(201).send('Author added');
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const authorIndex = authors.findIndex(author => author.id == id);
    if (authorIndex !== -1) {
        authors[authorIndex].name = name;
        res.send('Author updated');
    } else {
        res.status(404).send('Author not found');
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    authors = authors.filter(author => author.id != id);
    res.send('Author deleted');
});

module.exports = router;
