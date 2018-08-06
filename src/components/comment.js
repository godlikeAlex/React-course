import React from "react";
import {connect} from 'react-redux';
import {commentSelectorFactory} from '../selector'


function Comment({comment}) {

	return (<div>
			<h4>{comment.text}</h4>
			<div>{comment.user}</div>
		</div>);

}

const mapStateToProps = () => {
	const commentSelector = commentSelectorFactory();
     return function(state,ownProps) {
        return {
            comment:commentSelector(state,ownProps)
        }
    }
};

export default connect(mapStateToProps)(Comment)


