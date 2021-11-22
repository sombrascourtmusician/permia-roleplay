<script>
  let className = "";
  export { className as class };
  export let style = null;
  export let body = false;
  export let to = null;
  export let id = null;

  const classList = `card text-white bg-dark ${body ? "p-3" : ""} ${className}`;
</script>

{#if to}
  <a class="{classList} d-block text-decoration-none" width="100%" {id} {style} href={to} >
    <slot />
  </a>
{:else}
  <div class={classList} width="100%" {id} {style}>
    <slot />
  </div>
{/if}