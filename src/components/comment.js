import React from "react";
import {connect} from 'react-redux';

function Comment({comment}) {
	console.log('----',comment.text);
	return (<div>
			<h4>{comment.text}</h4>
			<div>{comment.user}</div>
		</div>);

}

export default connect((state,ownProps)=>{
	return {
        comment: state.comments.find(comment => comment.id === ownProps.id)
	}
})(Comment)