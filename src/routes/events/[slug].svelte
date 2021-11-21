<script context="module">
	import events from '../../resources/events.js';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page }) {
		return {
      props: {
        availableEvents: events[page.params.slug]
      }
		};
	}
</script>

<script>
	import Card from '$lib/Card.svelte';
  
  export let availableEvents;
</script>

<svelte:head>
	<title>Permia - Events</title>
  <meta name="keywords" content="Permia, Roleplay, Events" />
  <meta name="description" content="A list of events">
</svelte:head>


{#each availableEvents.content as event}
<Card body class="mb-3">
  <h2 class="fs-1">{event.title}</h2>
  {#each event.content as content}
    <p>{content}</p>
  {/each}
</Card>
{/each}