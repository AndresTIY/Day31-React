import React from 'react'
import PostForm from './post_form'
import BlogBodyCorrect from './test2'
import Collapse from './collapse'

const BlogPost = React.createClass({

  getInitialState: function () {
    return {
      hidden: false
    };
  },

  hideContent: function(){
    this.setState({
      hidden: !this.state.hidden
    })
  },


  render: function(){
    var aClass = 'show-article';
    if (this.state.hidden){
      aClass = 'hide-article';
    }

    var postClass = 'post';

    return(
      <div className={postClass}>
        <h2>{this.props.title}</h2>
        <button onClick={this.hideContent}>Collapse</button>
        <article className={aClass}>{this.props.content}</article>
      </div>
    )

  }


})

export default BlogPost;
