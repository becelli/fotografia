// MUDAR O NOME AO SELECIONAR UM FILTRO
function changeName(name) {
    var titulo = document.getElementById("page-title");
    if (name == "casamentos") {
        titulo.innerHTML = "Galeria de Casamentos";
    } else if (name == "aniversarios") {
        titulo.innerHTML = "Galeria de Aniversários";
    } else if (name == "ensaios") {
        titulo.innerHTML = "Galeria de Ensaios";
    } else if (name == "natureza") {
        titulo.innerHTML = "Galeria da Natureza";
    } else if (name == "arquitetura") {
        titulo.innerHTML = "Galeria de Arquitetura";
    } else {
        titulo.innerHTML = "Todas as Fotos";
    }
};
// ADICIONAR FOTOS DE CASAMENTO
for (var i = 1; i < 4; i++){
    var divImagens = document.createElement("div");
    document.getElementById("gallery").appendChild(divImagens);
    divImagens.id = "galeria-casamentos-" + i;
    divImagens.classList.add("mb-3", "pics", "animation", "all", "1");
    var imagem = document.createElement("img");
    imagem.src = 'images/casamentos/casamentos (' + i + ').webp';
    imagem.classList.add("img-fluid")
    document.getElementById("galeria-casamentos-" + i).appendChild(imagem);
}
// ADICIONAR FOTOS DE ANIVERSÁRIO
for (var i = 1; i < 4; i++){
    var divImagens = document.createElement("div");
    document.getElementById("gallery").appendChild(divImagens);
    divImagens.id = "galeria-aniversarios-" + i;
    divImagens.classList.add("mb-3", "pics", "animation", "all", "2");
    var imagem = document.createElement("img");
    imagem.src = 'images/casamentos/aniversarios (' + i + ').jpg';
    imagem.classList.add("img-fluid")
    document.getElementById("galeria-aniversarios-" + i).appendChild(imagem);
}

// FILTRAR AS FOTOS
$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
    setTimeout(function() {
    $("."+selectedClass).fadeIn().addClass('animation');
    $("#gallery").fadeTo(300, 1);
    }, 300);
    });
    });
