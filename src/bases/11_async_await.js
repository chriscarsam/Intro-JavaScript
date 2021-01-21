
//const getImagenPromersa = () => new Promise(resolve => resolve('https://adkfdkfdjk.com'))
//getImagenPromersa().then(console.log);

const getImagen = async() => {
    
    try {
        const apiKey = 'I1Omgu16s5Y2Q2KwkIqLIO0Jm1FJpo4n';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
    
        const { url } = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );         
    } catch (error) {
        // manejo del error
        console.log(error)
    }
   
}

getImagen();
