import React from 'react';

const StreamInfo = () => (
	<div className="columns is-gapless">
        <div className="column">
            <div className="info-window">
                <p className="title is-2 has-text-centered has-text-primary">BrightSideMusic</p>
                <p className="has-text-centered">Leave BrightSideMusic a Tip! Venmo: @alejo_izaguirre</p>
                <p className="has-text-centered">Find BrightSideMusic on Instagram <a href="https://www.instagram.com/brightsidemusic/">@brightsidemusic</a></p>
                <p className="has-text-centered">Check out BrightSideMusic on Bandcamp <a href="https://brightsidemusicofficial.bandcamp.com/">brightsidemusicofficial.bandcamp.com/</a></p>
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