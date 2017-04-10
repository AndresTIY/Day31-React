import React from 'react'
const Collapse = React.createClass({
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

  }

})
export default Collapse;
