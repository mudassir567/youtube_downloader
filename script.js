let download_btn= document.getElementById('downloadbtn');
let URLinput = document.querySelector('.form-control');
let select = document.querySelector('.opt');
let serverURL = 'http://localhost:4000';

download_btn.addEventListener('click', () => {
    if (!URLinput.value) {
		alert('Enter YouTube URL');
	} else {
		if (select.value == 'mp3') {
			redirectMp3(URLinput.value);
		} else if (select.value == 'mp4') {
			redirectMp4(URLinput.value);
		}   
	}
});

function redirectMp3(query) {
	window.location.href = `${serverURL}/downloadmp3?url=${query}`;
}

function redirectMp4(query) {
	window.location.href = `${serverURL}/downloadmp4?url=${query}`;
}