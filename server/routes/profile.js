const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");


// to get the profile
router.get('/', (req, res) => {
    const token = req.headers.authorization?.split('Bearer ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    try {
        const decoded = jwt.verify(token, 'your-secret-key'); // Replace with your actual secret key
        const userId = decoded.sub;

        const user = users.find((u) => u.id === userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.json(user);
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
});
 module.exports = router;
