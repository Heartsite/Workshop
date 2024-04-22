<script>
	import { onMount } from 'svelte';
	import TodoItem from '$lib/todoItem.svelte';

	let todos = [];
	let todoTextField = '';

	$: if (todos.length > 0) {
		localStorage.setItem('todos', JSON.stringify(todos));
	}

	const addTodo = () => {
		if (todoTextField === '') {
			return;
		}

		todos = [
			...todos,
			{
				title: todoTextField,
				completed: false
			}
		];
		todoTextField = '';
	};

	const deleteTodo = (index) => {
		todos.splice(index, 1);
		todos = todos;
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	onMount(() => {
		const todosFromLocalStorage = localStorage.getItem('todos');
		if (todosFromLocalStorage) {
			todos = JSON.parse(todosFromLocalStorage);
		}
	});
</script>

<div class="w-full flex justify-center">
	<div class="">
		<h1 class="">Todo App</h1>
		<label class="">
			Title
			<input
				class=""
				type="text"
				bind:value={todoTextField}
				placeholder="Hit the sack."
			/>
		</label>
		<div class="">
			<button
				class=""
				on:click={addTodo}>Add</button
			>
		</div>
		<hr />

		<div class="">
			{#if todos.length === 0}
				<div class="">No todos found</div>
			{/if}
			{#each todos as todo, index}
				<TodoItem bind:todo={todo} onDelete={() => deleteTodo(index)} />
			{/each}
		</div>
	</div>
</div>
