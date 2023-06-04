

// export const myAction = async ( { commit } ) => {

import journalApi from "@/api/journalApi"

// }


export const loadEntries = async (  ) => {

    const { data } = await journalApi.get('/entries.json')
    console.log(data)

}

export const updateEntry = async ( ) => {

}

export const createEntry = async (  ) => {

}

