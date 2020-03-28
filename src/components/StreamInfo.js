import React from 'react';

const StreamInfo = () => (
	<div className="columns is-gapless">
        <div className="column">
            <div className="info-window">
                <p className="title is-2 has-text-centered has-text-primary">Geovanie Brooks</p>
                <p className="has-text-centered">Leave Matt a Tip! Venmo: @mattmouart </p>
                <p className="has-text-centered">Find Geo on Instagram <a href="https://www.instagram.com/pizzaguy_blues/">@pizzaguy_blues</a></p>
                <p className="has-text-centered">Check out Geo's band on Bandcamp <a href="https://staticsymphony.bandcamp.com/">https://staticsymphony.bandcamp.com/</a></p>
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