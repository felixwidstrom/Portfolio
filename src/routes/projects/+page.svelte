<script lang="ts">
	import { projects, type Project } from '$lib/data/projects';

	import * as Dialog from '$components/ui/dialog';

	let selectedProject: Project | undefined = $state();
	let open = $state(false);
</script>

<div
	class="no-scrollbar grid max-h-full grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4 overflow-y-scroll p-4 text-white"
>
	{#each projects as project (project.title)}
		<button
			onclick={() => {
				selectedProject = project;
				open = true;
			}}
			class="flex h-[180px] w-full bg-white cursor-pointer"
			style="background-image: url({project.image}); background-size: cover; background-position: center;"
		>
			<div class="m-auto w-fit bg-black p-2">
				<p>{project.title}</p>
			</div>
		</button>
	{/each}
</div>

<Dialog.Root bind:open>
	<Dialog.Content class="max-w-full border-0 bg-[#242424] text-white sm:max-w-5xl">
		<Dialog.Header>
			<h3 class="text-2xl font-bold">{selectedProject?.title}</h3>
		</Dialog.Header>
		<div class="flex flex-col-reverse gap-6 md:grid md:grid-cols-[1fr_2fr]">
			<div class="flex flex-col gap-2">
				<p>{selectedProject?.description}</p>
				<a href={selectedProject?.link} target="_blank" class="w-min text-blue-500 underline">Link</a>
			</div>
			<img
				src={selectedProject?.image ?? 'https://placehold.co/1920x1080?text=No+image+available'}
				alt="Preview of project"
			/>
		</div>
	</Dialog.Content>
</Dialog.Root>
