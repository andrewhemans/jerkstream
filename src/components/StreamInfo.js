import React from 'react';

const StreamInfo = () => (
	<div className="columns is-gapless">
        <div className="column">
            <div className="info-window">
                <p className="title is-2 has-text-centered has-text-primary">Philthy Phil</p>
                <p className="has-text-centered">Leave Phil a Tip! Venmo: @philthyphuckingphil</p>
                <p className="has-text-centered">Find Phil on Instagram <a href="https://www.instagram.com/philthyphuckingphil/">@philthyphuckingphil</a></p>
                <p className="has-text-centered">Check out Phil on Bandcamp <a href="https://philthyxphil.bandcamp.com/">philthyxphil.bandcamp.com/</a></p>
            </div>
        </div>
        <div className="column is-one-third chat-window">
            <iframe 
                title="chat"
                frameborder="1"
                scrolling="true"
                id="andrewhemans"
                src="https://www.twitch.tv/embed/andrewhemans/chat?parent=jerkindie.com"
                height="400px"
                width="100%">
            </iframe>
        </div>
	</div>
);


export default StreamInfo;