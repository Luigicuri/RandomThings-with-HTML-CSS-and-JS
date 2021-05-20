 
 function load(){
 
 let url = 'https://pokeapi.co/api/v2/pokemon/kingdra';
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.clear();
            console.log(data);
            document.getElementById('nome').innerHTML = data['name'];
            document.getElementById('num').innerHTML = data['order'];
            document.getElementById('type1').innerHTML = data['types']['0']['type']['name'];
            document.getElementById('type2').innerHTML = data['types']['1']['type']['name'];
            let img = data['sprites']['front_default'];
            document.getElementById('pic').setAttribute('src', img);
            

            
            
            
        });

};
document.getElementById('button').onclick = load;