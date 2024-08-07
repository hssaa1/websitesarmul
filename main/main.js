const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

let users = []; // penyimpanan data pengguna

app.post('/register', (req, res) => {
    const { username, diriData } = req.body;
    users.push({ username, diriData });
    res.send('Registrasi Akun Sukses!');
});

app.post('/login', (req, res) => {
    const { username, diriData } = req.body;
    const user = users.find(u => u.username === username);
    if (user && user.diriData === diriData) {
        res.send('Masuk Sukses');
    } else {
        res.status(401).send('Akun Tidak Sah');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
