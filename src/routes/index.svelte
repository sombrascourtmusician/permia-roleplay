<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import Card from "$lib/Card.svelte";

  const imageCount = 39;

	const images = [];
  for (let i = 1; i <= imageCount; ++i) {
    images.push(`/gallery/Permia (${i}).jpg`);
  }

  const delay = 4000;

  let timer = setTimeout(() => updateIndex(1), delay);

	let activeIndex = Math.floor(Math.random() * imageCount);

  let updateIndex = (offset: number) => {
    activeIndex += offset;
    if (activeIndex < 0) {
      activeIndex += imageCount;
    }
    if (activeIndex >= imageCount) {
      activeIndex -= imageCount;
    }

    clearTimeout(timer);
    timer = setTimeout(() => updateIndex(1), delay);
  }

</script>

<svelte:head>
  <title>Permia Roleplay</title>
  <meta name="keywords" content="Permia, Roleplay, SL, Second Life" />
  <meta name="description" content="This site is meant to be used as a compendium for the Permia Roleplay sim on Second Life">  
</svelte:head>

<section>
  <Card class="text-center">
    <div class="p-1">
      <h1 class="fw-bold">Welcome to Permia!</h1>
      <h2 class="fs-4">A Second Life roleplay sim featuring faction conflict, magic, crafting, and combat.</h2>
    </div>

    <div class="carousel">
      <div class="carousel-inner">
        {#each images as image, i}
          <div class="carousel-item {activeIndex === i ? "active" : ""}">
            <img src={image} class="d-block w-100" alt="Permia sim life - gallery image {i+1}">
          </div>
        {/each}
      </div>
      <button class="carousel-control-prev" type="button" on:click={() => updateIndex(-1) }>
        <span class="carousel-control-prev-icon" title="previous"></span>
      </button>
      <button class="carousel-control-next" type="button" on:click={() => updateIndex(1) }>
        <span class="carousel-control-next-icon" title="next"></span>
      </button>
    </div>
  </Card>
  
  <Card class='mt-3'>
    <div class="row">
      <div class="col-sm-4">
        <img src="/npcs/docks-worker.webp" width="100%" alt="Adventure Starting Location" />
      </div>
      <div class="col-sm-8">
        <div class='px-2'>
          <a href='/quests/starter' class="fs-2 text-light">Start your adventure</a>
          <p class="mt-2 text-white-50">Tutorial quest description if needed. Other stuff. Blah</p>
        </div>
      </div>
    </div>
  </Card>
</section>
