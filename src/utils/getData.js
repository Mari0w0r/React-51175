async function getData(){
    try{
    const response = await fetch("/productos.json");
    const data = await response.json();
    return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default getData;