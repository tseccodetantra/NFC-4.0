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

app.get('/api/attendence', async (req, res) => {
    const { studentId } = req.query;

    if (!studentId) {
        return res.status(400).send('Missing student ID');
    }

    try {
        const client = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: client });
        const now = new Date().toLocaleString();

        const getRes = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: `Sheet1!A2:E`,
        });
        const rows = getRes.data.values;

        let foundId = -1;
        for (let i = 0; i < rows.length; i++) {
            if (rows[i][0] === studentId) {
                foundId = i + 2;
                break;
            }
        }

        if (foundId === -1) {
            return res.status(404).json({msg: 'Student not found'});
        }

        await sheets.spreadsheets.values.update({
            spreadsheetId: SPREADSHEET_ID,
            range: `Sheet1!E${foundId}`,
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


        res.status(201).json({ msg: 'Registration Successfull' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Some error occured' })
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})