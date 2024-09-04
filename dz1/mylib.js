const fs = require('fs');
const path = require('path');

function CreateBody() {
    const filePath = path.join(__dirname, 'main.html'); // Замените 'yourfile.html' на имя вашего файла с HTML
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return data;
    } catch (err) {
        console.error('Error reading the file:', err);
        return '<h1>Error occurred while reading the file</h1>';
    }
}

module.exports = {
    CreateBody
};