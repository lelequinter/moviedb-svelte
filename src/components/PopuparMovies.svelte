<script>
    import MovieCard from "./MovieCard.svelte";

    export let movies;
    console.log(movies);
</script>

<h3>Popular movies</h3>
<div class="popular-movies">
    {#each movies as movie, i}
       <MovieCard {movie} />
    {/each}
</div>

<style>
    h3{
        padding: 0 1rem;
    }

    .popular-movies{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem 2rem;
    }
</style>