import React from 'react'
//
const PostForm = React.createClass({
  render: function(){
    var formClass = 'form';

    return (
      <div className={formClass}>
        <input placeholder="blog title"></input>
        <textarea rows="8" cols="80"></textarea>
      </div>
    )
  }

})
export default PostForm;
