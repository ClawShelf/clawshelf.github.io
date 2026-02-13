<script>
	import { Button } from 'flowbite-svelte';
	import { Section } from 'flowbite-svelte-blocks';
</script>

<svelte:head>
	<title>ClawShelf</title>
</svelte:head>

<Section>
	<div class="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
		<div class="mr-auto place-self-center lg:col-span-7">
			<h1
				class="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white"
			>
				ClawShelf: Your AI Documentation Library
			</h1>
			<p
				class="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400"
			>
				Access 600+ OpenClaw agent commands and skills instantly on your mobile device. Offline,
				fast, and built for engineers.
			</p>
			<Button
				href="https://play.google.com/store/apps/details?id=com.fengjiongmax.clawshelf"
				color="primary"
				size="xl">Download for Android</Button
			>
			<Button
				href="https://apps.apple.com/us/app/clawshelf-openclaw-docs/id6758986679"
				color="primary"
				size="xl">Download for iOS</Button
			>
		</div>
		<div class="hidden lg:col-span-5 lg:mt-0 lg:flex">
			<img src="/screenshot.png" alt="ClawShelf Mockup" />
		</div>
	</div>
</Section>

<!-- <div class="py-10 text-center">
	<a href="/privacy" class="text-sm text-gray-500 hover:underline">Privacy Policy</a>
</div> -->
