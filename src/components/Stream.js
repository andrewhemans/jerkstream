import React from 'react';

const Stream = () => (
	<div className="stream">
        <iframe 
            className="video"
            width="560" 
            height="315" 
            title="Stream"
            src="https://www.youtube.com/embed/oG9vNtNkFJY" 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe>
	</div>
);


export default Stream;