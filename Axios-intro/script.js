$('#all-countries-button').click(function(){
    axios.get('https://restcountries.eu/rest/v2/all')
.then((response)=>{
    console.log(response.data[0])
    
    $("#list").html('<ul></ul>')
    response.data.forEach((country)=>{
        $("#list").append('<li>' + country.name + '</li>');
    });
})
.catch((err)=>{
    console.log(err)
})
});
    



$('#country-btn').click(function(){
    const countryInput =  document.getElementById('countries-input').value;
    axios.get('https://restcountries.eu/rest/v2/name/'+countryInput)
.then((response)=>{
    console.log(response.data)
    
    $("#list").html('<ul></ul>')
    response.data.forEach((country)=>{
        for(let i = 0; i < Object.keys(response.data[0]).length; i++){
            $("#list").append('<li>' + Object.keys(country)[i] + '  : '+ Object.values(country)[i]+ '</li>');
        }
    });
})
.catch((err)=>{
    console.log(err)
})
});



$('#capital-btn').click(function(){
    const capitalInput =  document.getElementById('country-by-capital').value;
    axios.get('https://restcountries.eu/rest/v2/capital/'+capitalInput)
.then((response)=>{
    console.log(response.data)
    
    $("#list").html('<ul></ul>')
    response.data.forEach((country)=>{
        for(let i = 0; i < Object.keys(response.data[0]).length; i++){
            $("#list").append('<li>' + Object.keys(country)[i] + '  :  '+ Object.values(country)[i]+ '</li>');
        }
    });
})
.catch((err)=>{
    console.log(err)
})
});
