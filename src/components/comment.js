import React from "react";
<<<<<<< HEAD
import {connect} from 'react-redux';

function Comment({comment}) {
	console.log('----',comment.text);
=======

export default function Comment({comment}) {
	
>>>>>>> origin/master
	return (<div>
			<h4>{comment.text}</h4>
			<div>{comment.user}</div>
		</div>);

<<<<<<< HEAD
}

export default connect((state,ownProps)=>{
	return {
        comment: state.comments.find(comment => comment.id === ownProps.id)
	}
})(Comment)
=======
}
>>>>>>> origin/master
