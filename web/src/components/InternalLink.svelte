<script>
    export let slug;
    const href = '/' + slug.current;
  </script>
  
  <a {href} ><slot /></a> 
  