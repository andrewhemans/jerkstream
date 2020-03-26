import React from 'react';

const StreamInfo = () => (
	<div className="columns is-gapless">
        <div className="column">
            <div className="info-window">
                <p className="title is-2 has-text-centered has-text-primary">Gremnir</p>
                <p className="has-text-centered">Leave Gremnir a Tip! Venmo: @Gremnir  CashApp: $Gremnir</p>
                <p className="has-text-centered">Find Gremnir on Instagram <a href="https://www.instagram.com/austinozgremnir/">@austinozgremnir</a></p>
                <p className="has-text-centered">Check out his website <a href="https://www.gremnir.com">www.gremnir.com</a></p>
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