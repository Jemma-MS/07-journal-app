
import axios from "axios"


const uploadImage = async ( file ) => {

    if( !file  ) return

    try {


        // file es el archivo tal cual se carga
        const formData = new FormData()
        formData.append('upload_preset', 'curse-vue')
        formData.append('file', file)

        const url = 'https://api.cloudinary.com/v1_1/difmrp3l3/image/upload'
        const { data } = await axios.post( url, formData )

        console.log( data )

        return data.secure_url


    } catch ( error ){
        console.log('error al cargar la imagen revisar')
        console.log( error )
        return null
    }

}

export default uploadImage