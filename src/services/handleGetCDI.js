async function loadIPCA(setCdi) {
    try {
        const response = await fetch("http://localhost:3000/indicadores?q=cdi", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const data = await response.json();
        
        setCdi(data[0].valor);
    } catch (error) {
        console.log(error);
    }
}

export default loadIPCA;