const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Orx00QzS#dCnvfGn7xF5hr2rwCjpahLctQQgpGOk2j4c2KBaRs2Q", // Add your session id
MONGODB: process.env.MONGODB || "mongodb+srv://laramd:sadeesha2006@anya.gvsp435.mongodb.net/?retryWrites=true&w=majority&appName=Anya", // Add your mongodb url
};
