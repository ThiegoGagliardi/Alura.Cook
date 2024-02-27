<script lang="ts">
    import Tag from "$lib/components/compartilhados/Tag.svelte";

    export let href:string;
    export let  desabilitada = false;    
</script>

<a {href}>
    <Tag ativa={true} tamanho="lg" {desabilitada}>
        <slot></slot>   
   </Tag>
</a>

<style>

</style>