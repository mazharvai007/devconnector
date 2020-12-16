const express = require('express');
const connectDB = require('./config/db');

/**
 * Add router modules
 * @type {Router}
 */
let users = require('./routes/api/users');
let auth = require('./routes/api/auth');
let profile = require('./routes/api/profile');
let posts = require('./routes/api/posts');

const app = express();

/**
 * Connect Database
 */
connectDB();

app.get('/', (req, res) => {
	res.send('API Running');
});

/**
 * Init Middleware
 */
app.use(express.json({ extended: false }));

/**
 * Define Routes
 */
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

/**
 * Server PORT and listening
 * @type {*|number}
 */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is started on port ${PORT}`);
});
