<script lang="ts">
	import type { Field } from '../types';
	import { takeFieldByActivePlayer } from '../store/actions';


	export let field: Field;


	$: backgroundColor = !field?.player?.backgroundColor ? 'white' : field.player.backgroundColor;
	$: textColor = !field?.player?.textColor ? 'black' : field.player.textColor;


	const onClick = () => takeFieldByActivePlayer(field);
</script>


<div class="GameField" on:click={onClick} style:background-color={backgroundColor} style:color={textColor}>
	<span>
		{#if field.player}
			{field.player.symbol}
		{/if}
	</span>
</div>


<style>
	.GameField {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		font-size: 18px;
		text-transform: uppercase;
	}
</style>