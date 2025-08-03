const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
require('dotenv').config();
const decodedCreds = Buffer.from(process.env.GOOGLE_CREDENTIALS_32, 'base64').toString();
const keys = JSON.parse(decodedCreds);

const app = express();
app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(bodyParser.json());



const auth = new google.auth.GoogleAuth({
    credentials: keys,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

const updateSheet = async (id, role) => {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });
    const now = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    
    const roleRow = {
        "attendence": 'E',
        "lunch": 'F',
        "dinner": 'G',
        "breakfast": 'H',
    }

    const getRes = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `Sheet1!A2:E`,
    });
    const rows = getRes.data.values;

    let foundId = -1;
    for (let i = 0; i < rows.length; i++) {
        if (rows[i][0] === id) {
            foundId = i + 2;
            break;
        }
    }

    if (foundId === -1) {
        return res.status(404).json({ msg: 'Student not found' });
    }

    await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `Sheet1!${roleRow[role]}${foundId}`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [["Yes"]],
        },
    });

    await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `Sheet1!D${foundId}`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [[now]],
        },
    });
}
app.get('/api/:role', async (req, res) => {
    const { role } = req.params;
    const { id } = req.query;
    const { password } = req.query;

    if (!id || !password) return res.status(400).json({ message: "Missing data" });

    // Validate password
    if (password !== process.env.PASSWORD) {
        return res.status(401).json({ message: "Invalid password" });
    }

    if (!["attendence", "lunch", "dinner", "breakfast"].includes(role)) {
        return res.status(400).json({ message: "Invalid role" });
    }

    try {
        // Google Sheets update logic
        await updateSheet(id, role);
        return res.status(200).json({ message: `Marked ${role} for ${id}` });
    } catch (err) {
        return res.status(500).json({ message: "Error updating sheet" });
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})