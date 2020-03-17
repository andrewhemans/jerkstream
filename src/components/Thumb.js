import React from 'react';

const Thumb = ({ thumbnail }) => (
	<div className="column is-one-third">
		<img src={thumbnail.url} alt="video link" />
	</div>
);

export default Thumb;