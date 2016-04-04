var app = app || {};

(function () {
  'use strict';

  app.AppItem = React.createClass({

    getInitialState: function () {
      return {
        editText: this.props.model.get('title'),
        editing: false
      };
    },

    componentDidUpdate: function(prevProps) {
      if (this.state.editing) {
        // find edit field
        var node = React.findDOMNode(this.refs.editField);
        // set focus to edit field
        node.focus();
        // move cursor at the end of the edit field
        node.setSelectionRange(node.value.length, node.value.length);
      }
    },

    handleToggle: function (e) {
      this.props.model.toggle();
    },

    handleEdit: function(e) {
      this.setState({editing: true});
    },

    handleDestroy: function(e) {
      this.props.model.destroy();
    },

    handleSubmit: function (e) {
      // set new title
      this.props.model.set('title', this.state.editText);

      // remove todo if empty
      if (_.isEmpty(this.props.model.get('title'))) {
        this.props.model.destroy();
      }

      // save todo if valid
      else if (this.props.model.isValid()) {
        this.props.model.save();
      }

      // fetch original todo if not valid
      else {
        this.props.model.fetch();
      }

      this.setState({editing: false});
    },

    handleChange: function (e) {
      this.setState({editText: e.target.value});
    },

    handleKeyDown: function (e) {
      // cancel todo on escape key
      if (e.which === app.ESCAPE_KEY) {
        this.setState({editText: this.props.model.get('title')});
        this.setState({editing: false});
      }

      // on enter key
      else if (e.which === app.ENTER_KEY) {
        // find edit field
        var node = React.findDOMNode(this.refs.editField);
        // blur edit field
        node.blur();
      }
    },

    render: function () {
      var className = classNames({
        completed: this.props.model.get('completed'),
        editing: this.state.editing
      });

      return (
        <li className={className}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={this.handleToggle}
              checked={this.props.model.get('completed')} />
            <label onDoubleClick={this.handleEdit}>{this.props.model.get('title')}</label>
            <button className="destroy" onClick={this.handleDestroy} />
          </div>
          <input
            ref="editField"
            className="edit"
            value={this.state.editText}
            onBlur={this.handleSubmit}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown} />
        </li>
      );
    }
  });
})();
