async function handleGetIPCA(setIpca) {
    try {
        const response = await fetch("http://localhost:3000/indicadores?q=ipca", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const data = await response.json();
        
        setIpca(data[0].valor);
    } catch (error) {
        console.log(error);
    }
}

export default handleGetIPCA;