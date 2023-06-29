<script>
    import PopuparMovies from '../components/PopuparMovies.svelte';

    export let data;
</script>

<section>
    <PopuparMovies movies={data.popular}/>
</section>