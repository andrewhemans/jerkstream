import React from 'react';

const TwitchStream = () => (
	<div className="stream">
        <iframe 
            id="iframe"
            className="video"
            src="https://player.twitch.tv?channel=andrewhemans" 
            title="TwitchStream"
            width="100%" 
            frameborder="0" 
            scrolling="no" 
            allowfullscreen></iframe>
	</div>
);


export default TwitchStream;

