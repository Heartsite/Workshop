<script>
</script>

<div class="container">
	<div class="app">
		<h1>Todo App</h1>
		<label>
			Title
			<input class="textField" type="text" placeholder="Hit the sack." />
		</label>
		<div class="toolbar">
			<button class="button button-add">Add</button>
		</div>
		<hr />

		<!-- <div class="noTodo">No todos found</div> -->

		<div class="todos">
			<div class="todo">
				<div class="todo-title">
					<input class="todo-checkbox" type="checkbox" />
					<span>Title</span>
				</div>
				<button class="button button-delete">Delete</button>
			</div>
		</div>
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		border-width: 0;
		border-style: solid;
		border-color: #e5e7eb;
	}

	.container {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.app {
		width: 50%;
		padding-top: 1rem;
	}

	.app > * {
		margin-top: 0.5rem;
	}

	label {
		display: flex;
		flex-direction: column;
	}

	.textField {
		padding: 0.5rem;
		width: 100%;
		border-radius: 0.25rem;
		border-width: 1px;
	}

	.button {
		padding: 0.5rem;
		border-radius: 0.25rem;
	}

	.button:active {
		transform: scale(0.95);
	}

	.button-add {
		background-color: #10b981;
		color: #ffffff;
	}

	.button-add:hover {
		background-color: #34d399;
	}

	.button-delete {
		background-color: #ef4444;
		color: #ffffff;
	}

	.button-delete:hover {
		background-color: #f87171;
	}

	hr {
		margin-top: 1rem;
		margin-bottom: 1rem;
		border-width: 1px;
	}

	.toolbar {
		display: flex;
		justify-content: flex-end;
	}

	.noTodo {
		color: #6b7280;
		text-align: center;
	}

	.todos > * {
		margin-top: 0.5rem;
	}

	.todo {
		display: flex;
		padding: 0.5rem;
		justify-content: space-between;
		align-items: center;
		border-radius: 0.25rem;
		border-width: 1px;
		/* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); */
	}

	.todo-title {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.todo-checkbox {
		width: 1.5rem;
		height: 1.5rem;
	}

	.checked {
		text-decoration: line-through;
	}
</style>
