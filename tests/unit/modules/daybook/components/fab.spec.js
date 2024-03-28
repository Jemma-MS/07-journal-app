import Fab from '@/modules/daybook/components/Fab.vue'
import { shallowMount } from '@vue/test-utils'



describe(' pruebas en el FAB component ', () =>{


    test(' debe de mostrar el icono por defecto', () => {
        
        const wrapper = shallowMount ( Fab ) 
        const iTag = wrapper.find('i')

        expect( iTag.classes('fa-plus') ).toBeTruthy()
    })

    test(' debe de mostrar por argumento: fa-circle', () => {

        const wrapper = shallowMount ( Fab, {
            props: {
                icon: 'fa-cirle'
            }
        }) 
        const iTag = wrapper.find('i')

        expect( iTag.classes('fa-cirle') ).toBeTruthy()
    })

    
    test(' debe emitir el evento on:click cuando se hace click', () => {

        const wrapper = shallowMount ( Fab ) 

        wrapper.find('button').trigger('click')

        //el to have lenght 1 hace que se llame una única vez
        expect( wrapper.emitted('on:click') ).toHaveLength(1)

        //wrapper.emitted('on:click')  // <- este evalua la acción on:click del componente

    })


})