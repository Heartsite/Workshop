<script>
	export let todo = {
		title: '',
		completed: false
	};

	export let onDelete = () => {};
</script>

<div class="">
	<div class="">
		<input class="" bind:checked={todo.completed} type="checkbox" />
		<span class="">{todo.title}</span>
	</div>
	<button
		class=""
		on:click={() => {
			onDelete();
		}}>Delete</button
	>
</div>
