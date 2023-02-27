<script lang="ts">
	import Icon from 'svelte-awesome';
	import { instagram, facebookOfficial, twitter } from 'svelte-awesome/icons';

	export let size: number;
</script>

<div class="flex gap-4">
	<a class="text-zinc-900 hover:text-green-600 " href="https://twitter.com/f3asheville">
		<Icon data={twitter} scale={size} label="twitter" />
	</a>
	<a class="text-zinc-900 hover:text-green-600 " href="http://facebook.com/f3ashville/"
		><Icon data={facebookOfficial} scale={size} label="facebook" /></a
	>
	<a class="text-zinc-900 hover:text-green-600 " href="https://www.instagram.com/f3asheville/"
		><Icon data={instagram} scale={size} label="instagram" />
	</a>
</div>
