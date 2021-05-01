// definire array ogg che rappresenta un gatto carat nome, età,colore e sesso 
//treamite la funzione forEach stampare in pagina tutti i gattini, ciascuno con il proprio colore ed il proprio nome
//... mile stone 2 
//... mile stone 3 

$(function() {

    //creeazione array di ogg
    const cats = [{
            name: 'astra',
            age: 1.5,
            color: '#AB6943',
            gender: 'male',
        },
        {
            name: 'plutone',
            age: 3,
            color: '#884874',
            gender: 'female',
        },
        {
            name: 'marte',
            age: 2,
            color: '#AB6943',
            gender: 'male',
        },
        {
            name: 'venere',
            age: 0.8,
            color: '#EAC440',
            gender: 'female',
        },
        {
            name: 'giove',
            age: 1.5,
            color: '#6BC674',
            gender: 'male',
        },
        {
            name: 'luna',
            age: 1.5,
            color: '#A856E9',
            gender: 'female',
        },
        {
            name: 'tigre',
            age: 1.5,
            color: '#C55873',
            gender: 'male',
        },





    ];


    //console.log(cats)

    //ciclo con forEach e stampo i gattini 
    cats.forEach((cat) => {
        //console.log(cat);
        //console.log(listGenerator(cat.color, cat.name))
        $('#mailes-1').append(listGenerator(cat.color, cat.name));
    })
















});
//funzione per stama
function listGenerator(catColor, name) {
    console.log(catColor, name);
    let html = `
    <li>
         <i class="fas fa-cat" style="color:${catColor}"></i>
        <span>${name}</span>


        </li>
    `;
    return html

}