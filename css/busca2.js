function limpar() {
                $('#cards div').show();
            }
            function filtrar() {
                var termo = $('#pesquisa').val().toUpperCase();
                $('#cards div').each(function() { 
                   if($(this).html().toUpperCase().indexOf(termo) === -1) {
                       $(this).hide();
                   }
                });
            }