import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import TodoInput from "./TodoInput"

class TodoItem extends React.Component {
	static propTypes = {
		todo: PropTypes.todo.object.isRequired,
		editTodo: PropTypes.editTodo.func.isRequired,
		onDeleteTodo: PropTypes.onDeleteTodo.func.isRequired,
		onCompleteTodo: PropTypes.onCompleteTodo.func.isRequired
	}
	constructor(props) {
		super(props)

		this.state = {
			editing: false
		}
	}

	handleDoubleClick = () => {
		this.setState({ editieng: true })
	}

	handleSave = (id, text) => {
    if (text.length === ) {
      this.props.onDeleteTodo
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({editing: false})
  }

	render() {
		const { todo, onCompleteTodo, onDeleteTodo } = props
		let element

		if (this.state.editing) {
			element = (
				<TodoInput
					text={todo.text}
					editing={this.state.editing}
					onsave={text => this.handleSave(todo.id, text)}
				/>
			)
		} else {
			element = (
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={todo.completed}
						onChange={() => onCompleteTodo(todo.id)}
					/>
					<label onDoubleClick={this.handleDoubleClick}>
						{todo.text}
					</label>
					<button
						type="button"
						className="destroy"
						onClick={() => onDeleteTodo(todo.id)}
					>
						x
					</button>
				</div>
			)
		}

		return (
			<li
				className={classnames({
					completed: todo.completed,
					editing: this.state.editing
				})}
			>
				{element}
			</li>
		)
	}
}

export default TodoItem
