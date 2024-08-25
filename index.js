const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    const user_id = 'Anubhav_Das_11092003';  // Example, replace with dynamic generation
    const email = 'anubhav.das2021@vitstudent.ac.in';         // Replace with actual user data
    const roll_number = '21BEC0004';        // Replace with actual roll number

    const numbers = [];
    const alphabets = [];

    // Use forEach to process each item in the data array
    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else {
            alphabets.push(item);
        }
    });

    const lowerCaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
    const highestLowercaseAlphabet = lowerCaseAlphabets.sort().slice(-1);

    res.json({
        "is_success": true,
        "user_id": user_id,
        "email": email,
        "roll_number": roll_number,
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_lowercase_alphabet": highestLowercaseAlphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.json({ "operation_code": 1 });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
