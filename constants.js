require("dotenv").config();

const auth = {
    type: "OAuth2",
    user: "rahulkeshari801@gmail.com",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
};

const mailoptions = {
    from: "Rahul Kumar <rahulkeshari801@gmail.com>",
    to: "rahulkeshari801@gmail.com",
    subject: "Gmail API NodeJS",
};

module.exports = {
    auth,
    mailoptions,
};