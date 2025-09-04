<script lang="ts">
	import '../app.css';
	import { goto } from '$app/navigation';

	import GithubLogo from '$assets/img/github.png';

	let { children } = $props();

	let command = $state('');

	const handleInput = () => {
		switch (command) {
			case 'home':
				command = '';
				goto('/');
				break;
			case 'projects':
				command = '';
				goto('/projects');
				break;
			case 'github':
				command = '';
				window.open('https://github.com/felixwidstrom', '_blank');
				break;
			default:
				command = '';
				break;
		}
	};
</script>

<header class="flex h-min items-center justify-between p-4 text-white">
	<button onclick={() => goto('/')} class="cursor-pointer text-xl font-bold">Portfolio</button>
	<div class="flex items-center gap-4">
		<a href="https://github.com/felixwidstrom" target="_blank">
			<img src={GithubLogo} alt="Github logo" class="sq-8" />
		</a>
		<button onclick={() => goto('/projects')} class="cursor-pointer">Projects</button>
	</div>
</header>

<main class="grow max-h-[calc(100vh-120px)]">
	{@render children()}
</main>

<footer class="relative flex h-min w-full items-center p-4 text-white">
	<p class="text-nowrap">C:\Users\Guest&gt;</p>
	<input
		type="text"
		bind:value={command}
		onchange={() => handleInput()}
		class="peer w-full outline-none"
	/>
	<div class="absolute top-0 hidden -translate-y-[100%] flex-col peer-focus:flex">
		<p class="text-lg font-bold">Help</p>
		<p><span style="color: red;">home</span> - Returns the user to the home page.</p>
		<p>
			<span style="color: yellow;">projects</span> - Displays a list of previous/ongoing projects.
		</p>
		<p><span style="color: blue;">github</span> - Redirects the user to github</p>
	</div>
</footer>
