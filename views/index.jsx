var React = require('react');

 var TodoBox = React.createClass({
   render: function() {
     return (
       <div className="todoBox">
         <h1>Todos</h1>
         <TodoList data = {this.props.data} />
         <TodoForm />
       </div>
     );
   }
 });

 var TodoList = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.data,
      titleValue: '',
      detailValue: ''
    };
  },
  changeTitle: function(e) {
    this.setState({titleValue: e.target.value});
  },
  changeDetail: function(e) {
    this.setState({detailValue: e.target.value});
  },
  addToDo: function() {
    var newData = this.state.data;
    newData.push({
          title: this.state.titleValue,
          detail: this.state.detailValue
        });
    this.setState({data: newData});
    this.setState({titleValue: ""});
    this.setState({detailValue: ""});
  },
   render: function() {
     var todo = this.state.data.map(function(obj) { return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
     return (
       <div className = "todoList">
       <div>
          Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} />
          Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} />
          <button onClick={this.addToDo}>Add</button>
       </div>
         <table style={{border: "2px solid black"}}>
           <tbody>
             {todo}
           </tbody>
         </table>
       </div>
     );
   }
 });

 var Todo = React.createClass({
    getInitialState : function () {
      return {
        checked: false
      }
    },
    handleChange : function(e) {
      this.setState({
        checked: e.target.checked
      });
    },
    propTypes: {
      title: React.PropTypes.string.isRequired
    },
    render: function() {
      var fontStyle = this.state.checked ? style.checkedTodo : style.notCheckedTodo;
      return (
        <tr style={fontStyle}>
          <td style={style.tableContent}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td>
          <td style={style.tableContent}>{this.props.title}</td>
          <td style={style.tableContent}>{this.props.children}</td>
        </tr>
      );
    }
  });

 var TodoForm = React.createClass({
   render: function() {
     return (
      <div className="todoForm">
        I am a TodoForm.
      </div>
     );
   }
 });

 var style = {
   checkedTodo: {
     textDecoration: "line-through"
   },
   notCheckedTodo: {
     textDecoration: "none"
   },
   tableContent: {
     border: "1px solid black"
   }
 };

 module.exports = TodoBox;
