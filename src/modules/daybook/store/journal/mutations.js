

// export const myAction = ( /*state*/ ) => {

// }


export const setEntries = ( state, entries ) => {

    state.entries = [ ...state.entries, ...entries ]
    state.isLoading = false 
}

export const updateEntry = ( state, entry ) => { // entry actualizada

    //state,=.entries => vendra como arreglo
    const idx = state.entries.map( e => e.id ).indexOf( entry.id )
    state.entries[idx] = entry


    //state.entries 

}

export const addEntry = ( /*state*/ ) => {

}