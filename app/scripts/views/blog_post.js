import React from 'react'
import PostForm from './post_form'
import BlogBodyCorrect from './test2'

const BlogPost = React.createClass({

  render: function () {

    var postClass = 'post';

    return(
      <div className={postClass}>
        <h2>{this.props.title}</h2>
        <button>Collapse</button>
        <article>{this.props.content}</article>
      </div>
    )

  }


})

export default BlogPost;
