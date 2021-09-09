<script>
  export let href;
  export let blank;
  import GoLinkExternal from 'svelte-icons/go/GoLinkExternal.svelte'
</script>

<style>
  .icon {
    display: inline-block;
    height: .65em;
    width: .65em;
    margin-right: .25em;
    color: var(--gray);
  }
</style>

<a {href} target={blank ? '_blank' : undefined} rel="noopener noreferer"><slot /><span class="icon"><GoLinkExternal /></span></a> 
