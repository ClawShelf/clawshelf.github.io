<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import {
		Footer,
		FooterBrand,
		FooterCopyright,
		FooterLink,
		FooterLinkGroup,
		Navbar,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl
	} from 'flowbite-svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Navbar>
	<NavBrand href="/">
		<img src={favicon} class="me-3 h-6 sm:h-9" alt="ClawShelf Logo" />
		<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
			ClawShelf
		</span>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/privacy">Privacy</NavLi>
		<!-- <NavLi href="https://github.com/your-repo" target="_blank">OpenClaw Docs</NavLi> -->
	</NavUl>
</Navbar>

{@render children()}

<Footer footerType="logo">
	<!-- <div class="sm:flex sm:items-center sm:justify-between">
		<FooterBrand href="/" src={favicon} alt="Flowbite Logo" name="Flowbite" />
		<FooterLinkGroup
			class="mb-6 flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
		>
			<FooterLink href="/">About</FooterLink>
			<FooterLink href="/">Privacy Policy</FooterLink>
			<FooterLink href="/">Licensing</FooterLink>
			<FooterLink href="/">Contact</FooterLink>
		</FooterLinkGroup>
	</div> -->
	<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
	<FooterCopyright href="/" by="ClawShelf" />
</Footer>

<!-- <Footer footerType="logo">
	<div class="mx-auto w-full  p-4 md:py-8">
		<div class="sm:flex sm:items-center sm:justify-between">
			<NavBrand href="/">
				<img src={favicon} class="me-3 h-8" alt="ClawShelf Logo" />
				<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
					ClawShelf
				</span>
			</NavBrand>
			<FooterLinkGroup
				class="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
			>
				<FooterLink href="/privacy">Privacy Policy</FooterLink>
				<FooterLink href="mailto:support@gearence.com">Contact</FooterLink>
			</FooterLinkGroup>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
		<FooterCopyright href="/" by="ClawShelf" year={2026} />
	</div>
</Footer> -->
