<script lang="ts">
    
    import Titulo from "$lib/components/compartilhados/Titulo.svelte";
    import categorias from "$lib/json/categorias.json";
    import Categoria from "$lib/components/paginas/index/Categoria.svelte";
    
    import { minhaLista } from "$lib/stores/minhaLista";
    import TagLink from "$lib/components/compartilhados/TagLink.svelte";
    import { beforeNavigate } from "$app/navigation";
        
    let lista_categorias = categorias;
 
    $: listaVazia = $minhaLista.length === 0;

    beforeNavigate((navigation) => {
         
        if (listaVazia && navigation.to?.url.pathname === '/receitas'){
            navigation.cancel();
        }
    }
    );


    function adicionarLista(event: CustomEvent<string>) {
        const ingrediente = event.detail;

        minhaLista.adicionar(ingrediente)  ;
    }

    function removerLista(event: CustomEvent<string>) {
        const ingrediente = event.detail;

        minhaLista.remover(ingrediente);
    }
</script>

<svelte:head>
    <title>Alura cook</title>
</svelte:head>

<main>
    <Titulo tag="h1">Ingredientes</Titulo>
    <div class="info">
        <p>Selecione os ingredientes que você deseja:</p>
        <p>*Atenção: consideramos que você tenha em cas sal, pimenta e água</p>
    </div>
    <div class="categorias">
        <ul class="categorias">
            {#each lista_categorias as categoria (categoria.nome)}
                <li>
                    <Categoria  {categoria}
                        on:tagSelecionada={adicionarLista}
                        on:tagDeselecionada={removerLista}
                    />
                </li>
            {/each}
        </ul>

        <div class="buscar-receitas">
            <TagLink href="/receitas" desabilitada={listaVazia} >Buscar Receitas</TagLink>
        </div>
    </div>
</main>

<style>
    .info {
        margin-bottom: 3.375rem;
    }

    .info > p {
        line-height: 2rem;
    }

    .categorias {
        margin-bottom: 4.6875rem;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
    }

    .buscar-receitas {
        display: flex;
        justify-content: center;
    }
</style>
