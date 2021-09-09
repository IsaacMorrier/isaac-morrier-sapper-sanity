<script>
    export let category;
    export let active;
</script>

<style lang="scss">
    li {
        font-family: garamond-premier-pro-caption, Times, serif;
        font-weight: 500;
        border: 1px solid;
        border-radius: 2rem;
        font-size: .8rem;
        list-style: none;
        padding: .25rem .75rem .25rem .75rem;
        display: inline-block;
        margin-right: .25rem;
        cursor: pointer;
    }
    .is-active {
        background: var(--text-color);
        color: var(--background-color);
    }
</style>

<li class='{active === category ? "is-active" : ""}' on:click="{() => active = category}">{category}</li>