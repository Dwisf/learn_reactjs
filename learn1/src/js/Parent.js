var Child = require('./Child');

var Parent = React.createClass({
  render: function(){
    return (
      <div>
        <div> This is the parent. </div>
        <Child name="child3"/>
      </div>
    )
  }
});

module.exports = Parent;
