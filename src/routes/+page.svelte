<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { AsciiRenderer } from '@threlte/extras';
	import Scene from '$components/Scene.svelte';
</script>

<div class="grid h-full w-full grid-cols-2 items-center text-white">
	<div class="flex flex-col gap-2 p-4">
		<p class="text-xl">Welcome!</p>
		<p>
			My name is Felix Bergqvist Widström and I am a full-time student at the degree programme for
			information and communication technology at KTH. I have always had a huge interest for all
			things regarding computers and software development. I am proficient in most of the commonly
			used programming languages and aim to expand that list. Most of my work consist of hobby
			projects with the purpose of learning certain concepts or frameworks.
		</p>
	</div>
	<Canvas>
		<AsciiRenderer characters=" .:-+*=%@#" options={{color: true}} />
		<Scene />
	</Canvas>
</div>
