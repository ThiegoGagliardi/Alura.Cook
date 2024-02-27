<script lang="ts">  
    import { createEventDispatcher } from 'svelte';
    import Tag from '../../compartilhados/Tag.svelte';
    
    import { minhaLista } from "$lib/stores/minhaLista";
   
    export let ingrediente :string;

    $:selecionado = $minhaLista.includes(ingrediente);

    const dispatch = createEventDispatcher<{tagSelecionada:string,
                                            tagDeselecionada:string}>();

    function selecionar(){       

        if (!selecionado){
            dispatch ('tagSelecionada', ingrediente);
        } else {
            dispatch ('tagDeselecionada', ingrediente);
        }
    }
</script>

<button on:click={selecionar}>
    <Tag ativa={selecionado}>{ingrediente}</Tag>
</button>

<style>
 button{
    cursor: pointer;
 } 
</style>