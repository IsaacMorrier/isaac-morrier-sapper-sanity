<script>
    export let posts;
    export let active;
    
    // import CategoriesListTag from "../components/CategoriesListTag.svelte";

	let categories = posts.map(p => p.categories); // create array of categories from posts
	categories = [...new Set([].concat.apply([], categories))]; // create set from flattened categories array

</script>

<style lang="scss">
    @import "../style/theme.scss";

    ul {
        font-family: garamond-premier-pro-caption, Times, serif;
        font-weight: 500;
        font-size: .8rem;
        
        @include runway;
        padding: 1rem 0 3rem .25rem;
        -webkit-touch-callout: none;
        -webkit-user-select: none; 
        -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    }
    li {
        list-style: none;

        border: 1px solid var(--text-color);
        border-radius: 2rem;

        display: inline-block;
        margin-right: .25rem;
        padding: .25rem .75rem .25rem .75rem;

        transition: background-color .2s ease-out;
        cursor: default;
    }
    span {
        font-size: 125%;
        padding-right: .1em;
    }
    .filter:hover {
        background: var(--hr-color);
    }
    .filter,
    .is-active {
        cursor: pointer;
    }
    
    .is-active,
    .all {
        background: var(--text-color);
        color: var(--background-color);
    }
    .is-active:hover {
        background: $gray-darkest;
    }
</style>

<ul>
    <!-- {#if active === undefined}
        <li transition:fade="{{duration: 1000}}" class="all">All</li>
        {#each categories as category}
        <li transition:fade="{{duration: 1000}}" class="filter" on:click="{() => active = category}">{category}</li>
        {/each}
    {:else}
        <li transition:fade="{{duration: 1000}}" class='is-active' on:click="{() => active = undefined}">{active} ×</li>
    {/if} -->
    <li
    class="{active == undefined ? 'all' : 'all is-active'}"
    on:click="{() => active = undefined}">All</li> <span>></span>
    {#each categories as category}
        {#if active == undefined || active === category}
         <li
            class="{active === category ? 'filter is-active' : 'filter'}"
            on:click="{() => active ? active = undefined : active = category }">{category} {active === category ? '×' : '' }</li>
        {/if}
    {/each}
</ul>