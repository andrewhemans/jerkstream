import React from 'react';

const StreamInfo = () => (
	<div className="columns is-gapless">
        <div className="column">
            <div className="info-window">
                <p className="title is-2 has-text-centered has-text-primary">Cheyenne Heard</p>
                <p className="has-text-centered">Leave Cheyenne a Tip! Venmo: @superchey</p>
                <p className="has-text-centered">Check out Cheyenne's band <a href="https://pineandpalm.bandcamp.com/">Pine+Palm</a></p>
                <p className="has-text-centered">Find Cheyenne on Instagram <a href="https://www.instagram.com/kate__smash/">@kate_smash</a></p>

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