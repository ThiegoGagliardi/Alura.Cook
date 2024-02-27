<script lang="ts">
    export let ativa   : boolean = false;
    export let tamanho : "md"|"lg" = "md";
    export let desabilitada : boolean = false;
</script>

<div class="tag" class:ativa class:tamanho class:desabilitada>

    <slot></slot>
</div>

<style>
    .tag {
        height: 48px;
        border-radius: 8px;
        padding: 1rem;
        text-align: center;
        color: var(--cor-texto-principal);
        background-color: var(--cinza);

        display: flex;
        justify-content: center;
        align-items: center;

        transition: 0.4s;
    } 

    .ativa {
        color: var(--branco);
        background-color: var(--laranja);
    }
    
    .lg {
        
        font-size: 1.125rem;
        padding:  1rem 1.5rem;
    }

    .desabilitada {

        opacity: 0.8;
        cursor: default;
        background-color: gray;
    }

</style>