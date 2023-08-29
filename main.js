$(document).ready(function () {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botaoCancelar').click(function() {//lembra de usar "#"quando for ID, ou "." quando for classe;
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const addImagem = $('#endereçoImagemNova').val();
        const novoItem = $('<li style="display: none"></li>');//estiuzou aqui msm, ao inves de ir no css, pois é estilizado na função apenas;
        $(`<img src="${addImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${addImagem}" target="_black" title="Ver imagem em tamanho real" />
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');//appnTo = incliuir no ("ul");
        $(novoItem).fadeIn(1000);//esta em mili segundos, 1000=1s;
        $('#endereçoImagemNova').val('');
    });
});