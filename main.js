const formulario = document.getElementById("formPoke")
const audioPoke = document.getElementById("audioPoke");
const btnCry = document.getElementById("btnCry");
const resultado = document.getElementById("resultado");


btnCry.addEventListener("click", function () {
    if (audioPoke.src) {
        audioPoke.play();
    }
});

formulario.addEventListener("submit", async function (evento){
    evento.preventDefault();

    const id = document.getElementById("idPoke").value

    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const pokemon = await resposta.json()

    document.getElementById("nomePokemon").textContent = pokemon.name;

    document.getElementById("imgPoke").src = pokemon.sprites.front_default;

    document.getElementById("audioPoke").src = pokemon.cries.latest;

    document.getElementById("basePoke").textContent = pokemon.base_experience;

    document.getElementById("typePoke").textContent = pokemon.types.map(t => t.type.name).join(", ");
})