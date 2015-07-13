var ExampleComponent = React.createClass({
  render: function(){
    return (
      <div>
        <div> This is an example component. </div>
      </div>
    )
  }
});

React.render(<ExampleComponent />, document.getElementById('app'));
