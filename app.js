const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
var path = require('path');
port =process.env.PORT || 4000;

const app = express();

app.use(cors());

app.use("/static", express.static('./static/'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname ,'/index.html'));
});


app.listen(port, () => {
	console.log('Server Works !!! At port 4000');
});

app.get('/downloadmp3', async (req, res, next) => {
	try {
		var url = req.query.url;
		let title = 'audio';
		await ytdl.getBasicInfo(url, {
			format: 'mp4'
		}, (err, info) => {
			title = info.player_response.videoDetails.title;
		});

		res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);
		ytdl(url, {
			format: 'mp3',
			filter: 'audioonly',
		}).pipe(res);
	} catch (err) {
		console.error(err);
	}
});

app.get('/downloadmp4', async (req, res, next) => {
	try {
		let URL = req.query.url;
		let title = 'video';

		await ytdl.getBasicInfo(URL, {
			format: 'mp4'
		}, (err, info) => {
			title = info.player_response.videoDetails.title;
		});

		res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);
		ytdl(URL, {
			format: 'mp4',
		}).pipe(res);
	} catch (err) {
		console.error(err);
	}
});