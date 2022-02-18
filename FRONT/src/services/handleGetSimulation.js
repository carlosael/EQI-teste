async function handleGetSimulation(indexingType,yieldType, setSimulationData) {
    
    try {
      const response = await fetch(
        `http://localhost:3000/simulacoes?tipoIndexacao=${indexingType}&tipoRendimento=${yieldType}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      setSimulationData(data[0]);
      
      return data[0];
    } catch (error) {
      console.log(error);
    } 
  }

  export default handleGetSimulation;