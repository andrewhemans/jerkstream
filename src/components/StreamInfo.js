import React from 'react';

const StreamInfo = () => (
	<div className="columns is-gapless">
        <div className="column">
            <div className="info-window">
                <p className="title is-2 has-text-centered has-text-primary">Melchor Sahagun III</p>
                <p className="has-text-centered">Leave Melchor a Tip! Venmo: @melchor-sahagun paypal: bornfaildie@gmail.com</p>
                <p className="has-text-centered">Find Melchor on Instagram <a href="https://www.instagram.com/smokerbuddy/">@smokerbuddy</a></p>
                <p className="has-text-centered">Check out Melchor's prject Stilt Lives on Bandcamp <a href="https://stiltlives.bandcamp.com/releases">stiltlives.bandcamp.com/</a></p>
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