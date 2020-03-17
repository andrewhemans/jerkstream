import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Thumb from './Thumb';

const ThumbGrid = () => {
	const data = useStaticQuery(graphql`
		query {
			allYoutubeVideo(limit: 6) {
				edges {
					node {
						title
						videoId
						publishedAt
						description
						thumbnail {
							height
							url
							width
						}
					}
				}
			}
		}
	`);

	return (
		<div className="columns is-multiline">           
			{data.allYoutubeVideo.edges.map(({ node }) => {
				return <Thumb key={node.videoId} {...node} />;
			})}
		</div>
	);
};

export default ThumbGrid;