async function loadSimulation(yieldType, indexingType) {
    try {
        const response = await fetch(`http://localhost:3000/simulacoes?tipoIndexacao=${indexingType}&tipoRendimento=${yieldType}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const data = await response.json();
        
        return console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export default loadSimulation;