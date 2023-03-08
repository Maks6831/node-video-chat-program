// how to show your own video in browser ...
const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video');



let cameraStream

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    cameraStream = stream;  
    addVideo(myVideo, stream);
    stopVideo(stream);
})

const addVideo = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
}

videoGrid.append(myVideo);

const stopVideo = (stream) => {
    stream.getTracks().forEach(track => {
        if(track.readyState == 'live'){
            track.stop();
        }
        
    });
}