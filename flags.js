const fetchMeUserInfo = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      const countryDataArray = data;
  
      createUI(countryDataArray);
    } catch (error) {
      console.error(error);
    }
  };
  
  const createUI = (countryDataArray) => {
    const container = document.getElementById('countries-container');
  
    countryDataArray.forEach((countryData) => {
      const { name: { common: countryName }, population: countryPopulation, flags: { svg: flagImageSrc } } = countryData;
  
      const countryDiv = document.createElement('div');
      const flagImg = document.createElement('img');
      const nameP = document.createElement('p');
      const populationP = document.createElement('p');
  
      flagImg.src = flagImageSrc;
      flagImg.classList.add('flag');
      nameP.textContent = countryName;
      populationP.textContent = `Population: ${countryPopulation}`;
  
      countryDiv.appendChild(flagImg);
      countryDiv.appendChild(nameP);
      countryDiv.appendChild(populationP);
  
      container.appendChild(countryDiv);
    });
  };
  
  fetchMeUserInfo();
  