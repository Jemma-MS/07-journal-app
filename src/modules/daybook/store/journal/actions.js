

// export const myAction = async ( { commit } ) => {

import journalApi from "@/api/journalApi"

// }


export const loadEntries = async ( { commit } ) => {

    const { data } = await journalApi.get('/entries.json')

    if ( !data ){
        commit('setEntries', [] )
        return
    }
    
    const entries = []
    for ( let id of Object.keys( data ) ) {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit( 'setEntries', entries )

}

export const updateEntry = async ( { commit }, entry ) => {   //entry debe de ser un parametro

    // Extraer solo lo que se necesitan //-id
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }

    // await journalApi.put( Path .json, dataToSave )
    const resp = await journalApi.put( `/entries/${ entry.id }.json`, dataToSave )

    console.log(resp)

    // Commit de una mutación -> updateEntry
    commit( 'updateEntry', { ...entry } )

}

export const createEntry = async (  ) => {

}

