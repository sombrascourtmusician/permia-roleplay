<script>
	import Card from "$lib/Card.svelte";
	import { gatheringNodes } from '../../resources/locations.js';
</script>

<svelte:head>
	<title>Permia - Gathering Nodes</title>
  <meta name="keywords" content="Permia, Roleplay, Crafting, Gathering" />
  <meta name="description" content="A list of gathering nodes">
</svelte:head>

{#each gatheringNodes as node}
  <Card body class="mb-3">
    <div class="row">
      <div class="col-md-6">
        <h2 class="fs-1">{node.title}</h2>
        <p>
          {node.description}
        </p>
        {#if node.nodes}
          <ul>
            {#each node.nodes as node}
              <li>
                {node.title}
                <ul>
                  {#each node.resources as resource}
                    <li>
                      {resource.title}
                      {#if resource.requirement}
                        <span>- Requires {resource.requirement}</span>
                      {/if}
                    </li>
                  {/each}
                </ul>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
      <div class="col-md-6 d-flex align-items-center">
        <img src={node.image} alt={node.title} class="mw-100" width="100%" />
      </div>
    </div>
  </Card>
{/each}