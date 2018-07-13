import React from "react";

export default function Comment({comment}) {
	
	return (<div>
			<h4>{comment.text}</h4>
			<div>{comment.user}</div>
		</div>);

}