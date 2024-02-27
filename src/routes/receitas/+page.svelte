<script lang="ts">
    import Titulo from '$lib/components/compartilhados/Titulo.svelte';
    import Receita from '$lib/components/paginas/Receita.svelte';
    import TagLink from '$lib/components/compartilhados/TagLink.svelte';

    import  receitas from  '$lib/json/receitas.json';
    import { minhaLista } from  '$lib/stores/minhaLista';

    $: receitasFiltradas = receitas.filter((receita) => 
                                            (receita.ingredientes.every((ingrediente) => 
                                                             $minhaLista.includes(ingrediente))) );
</script>

<svelte:head>
    <title>Alura Cook - Receitas</title>
</svelte:head>
<main>
    <Titulo tag="h1">Receitas</Titulo>
    <div class="info">
        <p class="verde">Resultados encontrados: {receitasFiltradas.length}</p>
        {#if receitasFiltradas.length}
            <p>
                Vejas as opções de receitas que encontramos com os ingredientes.
                selecionados:
            </p>
        {:else}
            <p>
                Nenhuma receita localizada com os ingredientes selecionados.
            </p>
        {/if}
    </div>

    <ul class="receitas">
        {#each receitasFiltradas as receita (receita.nome)}
            <li>
                <Receita {receita} />
            </li>
        {/each}
    </ul>
    
    <TagLink href={"/"} desabilitada={false}> Editar Receita</TagLink>    
</main>

<style>
    .info {
        margin-bottom: 3.375rem;
    }

    .info > p {
        line-height: 2rem;
    }

    .info > p.verde {
        color: var(--verde);
    }

    .receitas {
        text-align: start;
        margin-bottom: 3.75rem;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
    }
</style>
