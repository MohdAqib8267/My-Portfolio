const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs').promises;  // Use fs.promises for asynchronous file operations
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

const filePath = path.join(__dirname, "review.json");

app.post("/ad-review", async (req, res) => {
    const { username, org, rating, msg } = req.body;
    console.log(req.body);

    try {
        if (!username || !org || !rating || !msg) {
            return res.status(400).json({ error: 'Please fill all fields' });
        }

        const newReview = { username, org, rating, msg };
        const existingData = await fs.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(existingData);

        jsonData.push(newReview);

        await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));  // Use null, 2 for pretty formatting
        res.status(200).json({ message: 'Review added successfully!' });
    } catch (error) {
        console.error(error);
        res.json({ error: "Server error" });
    }
});

app.get('/ad-review', async (req, res) => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(data);

        if (jsonData.length > 0) {
            res.status(200).json(jsonData);
        } else {
            res.json({ error: "No Review" });
        }
    } catch (error) {
        console.error("Error:", error.message);
        res.json({ error: "Server error" });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
});
