// Dependencies
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

const app = express();

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/auson.love/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/auson.love/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/auson.love/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

const httpsServer = https.createServer(credentials, app);

app.post('/send', (req, res) => {
	require('child_process').execSync("python3 send.py");
	res.send('Success');
})

httpsServer.listen(3000, () => console.log(`Server running`))

