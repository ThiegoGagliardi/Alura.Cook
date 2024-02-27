<script lang="ts">
    import type ICategoria from "$lib/interfaces/ICategoria";
    import TagSelecionavel from "$lib/components/paginas/index/TagSelecionavel.svelte";
    import Card from "$lib/components/compartilhados/Card.svelte";

    export let categoria: ICategoria;
</script>

<Card>
    <div class="categoria-container">
        <img
            src="/icones/categorias_ingredientes/{categoria.imagem}"
            class="categoria-imagem"
            alt={categoria.nome}
        />

        <h3 class="categoria-nome">{categoria.nome}</h3>

        <ul class="ingredientes">
            {#each categoria.ingredientes as ingrediente (ingrediente)}
                <li>
                    <TagSelecionavel
                        {ingrediente}
                        on:tagSelecionada
                        on:tagDeselecionada
                    />
                </li>
            {/each}
        </ul>
    </div>
</Card>

<style>
    .categoria-container {
        padding: 0.75rem 0.5rem;
    }

    .categoria-imagem {
        margin-bottom: 0.5rem;
    }

    .categoria-nome {
        font-size: 1.125rem;
        color: var(--verde);
        margin-bottom: 0.875rem;
    }

    .ingredientes {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
        gap: 0.75rem 1rem;
    }
</style>
