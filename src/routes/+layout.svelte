<script lang="ts">
    import "../app.css";
        
    import Cabecalho from "$lib/components/compartilhados/Cabecalho.svelte";
    import Rodape from "$lib/components/layout/Rodape.svelte";
    import MinhaLista from "$lib/components/layout/MinhaLista.svelte";

    import { minhaLista } from "$lib/stores/minhaLista";
</script>

<div class="conteiner_principal">
    <Cabecalho />

    <div class="estilo-principal">
        {#if $minhaLista.length}
            <div class="minha-lista-container">
                <MinhaLista ingredientes={$minhaLista} />

                <div class="divisoria"></div>
            </div>
        {/if}
        <slot />
    </div>

    <Rodape />
</div>

<style>
    .conteiner_principal {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .estilo-principal {
        text-align: center;
        padding: 0 5vw 3.375rem;
        flex: 1;
    }

    .minha-lista-container {
        margin-bottom: 2rem;
    }

    .divisoria {
        width: 40vw;
        height: 2px;
        background-color: var(--verde);
        margin: 0 auto;
    }
</style>
