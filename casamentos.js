for (var i = 1; i < 4; i++){
    var divImagens = document.createElement("div");
    document.getElementById("gallery").appendChild(divImagens);
    divImagens.id = "minha-galeria-" + i;
    divImagens.classList.add("mb-3", "pics", "animation", "all");
    var imagem = document.createElement("img");
    imagem.src = 'images/casamentos/casamentos (' + i + ').webp';
    imagem.classList.add("img-fluid")
    document.getElementById("minha-galeria-" + i).appendChild(imagem);
}
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