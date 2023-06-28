<script>
    let count = 0;

    function decrement(offset = 1){
        count -= offset;
    }
    
    const increment = (offset = 1) => {
        count += offset;
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<a href="/about">Got to about</a>
<div class="counter-wrapper">
    <button on:click={() => decrement(2)}>Decrement</button>
    <p>{count}</p>
    <button on:click={() => increment(2)}>Increment</button>
</div>

<style>
    p{
        font-size: 2rem;
    }

    .counter-wrapper{
        display: flex;
        align-items: center;
        gap: 20px;
    }
</style>