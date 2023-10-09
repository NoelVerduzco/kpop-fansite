import React from 'react';
import ReactPlayer from 'react-player/youtube';

function YouTubeVideoPlayer() {

    const VIDEO_URLS = [
        "https://www.youtube.com/watch?v=POe9SOEKotk",
        "https://www.youtube.com/watch?v=L7spCJxloLY",
        "https://www.youtube.com/watch?v=ArmDp-zijuc",
        "https://www.youtube.com/watch?v=uR8Mrt1IpXg",
        "https://www.youtube.com/watch?v=XA2YEHn-A8Q",
        "https://www.youtube.com/watch?v=QfIY1r0_tRI",
        "https://www.youtube.com/watch?v=pyf8cbqyfPs",
        "https://www.youtube.com/watch?v=zugAhfd2r0g"
    ];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    return (
        <div className="player-wrapper">
            <ReactPlayer
                className="react-player"
                url={VIDEO_URLS[getRandomInt(VIDEO_URLS.length)]}
                width="100%"
                height="100%"
                controls="true"
            />
        </div>
    );
}

export default YouTubeVideoPlayer;