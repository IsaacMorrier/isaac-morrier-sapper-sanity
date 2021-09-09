<script>
  export let href;
  export let blank;
</script>

<a {href} target={blank ? '_blank' : undefined}><slot /></a> 
