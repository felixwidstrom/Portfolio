<script lang="ts">
	import { T } from '@threlte/core';
	import { interactivity, OrbitControls } from '@threlte/extras';
	import { debounce } from '$lib/utilities';

	let index = 0;

	const geometries = ['box', 'torus', 'ico', 'torusknot'];

	interactivity();

	const switchGeometry = () => {
		index = (index + 1) % geometries.length;
	};

	const debounceSwitchGeometry = debounce(switchGeometry, 200);
</script>

<T.DirectionalLight position={[0, 0, 5]} />

<T.PerspectiveCamera makeDefault position={[2, 2, 2]}>
	<OrbitControls enabled={false} autoRotate autoRotateSpeed={6} />
</T.PerspectiveCamera>

{#key index}
	<T.Mesh onpointerup={() => debounceSwitchGeometry()}>
		{#if geometries[index] === 'box'}
			<T.BoxGeometry />
		{:else if geometries[index] === 'torus'}
			<T.TorusGeometry args={[0.5, 0.3]} />
		{:else if geometries[index] === 'ico'}
			<T.IcosahedronGeometry />
		{:else if geometries[index] === 'torusknot'}
			<T.TorusKnotGeometry args={[0.5, 0.3]} />
		{/if}
		<T.MeshNormalMaterial />
	</T.Mesh>
{/key}
