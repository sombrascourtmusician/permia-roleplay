<script>
	import Card from '$lib/Card.svelte';
  import tutorials from "../../resources/tutorials.js";
</script>

<svelte:head>
	<title>Permia - FAQs</title>
  <meta name="keywords" content="Permia, Roleplay, Tutorial, FAQs" />
  <meta name="description" content="Quick answers to common questions">
</svelte:head>

<Card body>
  {#each tutorials.faq.content as qna}
    <p class="mb-0 fw-bold">Q: {qna.question}</p>
    <p>A: {@html qna.answer}</p>
  {/each}
</Card>
