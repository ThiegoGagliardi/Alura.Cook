import { writable } from "svelte/store";

const {  subscribe, set, update} = writable<string[]>([]);

export const minhaLista = {
    set,
    subscribe,
    update,

    adicionar(item:string){

        update((lista) => ([...lista, item]));

    },

    remover(item:string){
        update((lista) => lista.filter((litaItem) => litaItem !== item));
    }
}