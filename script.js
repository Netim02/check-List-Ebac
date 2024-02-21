$(document).ready(function(){
    $('form').on('submit', function(e){
        const inserirTarefa = $("#inserir-tarefa").val();
        e.preventDefault();
        
        const novaTarefe = $(`<li>${inserirTarefa}</li>`);
        $(novaTarefe).appendTo('ul');
        $('#inserir-tarefa').val('');
    })

    $('ul').on('click','li',function() {    
        $(this).toggleClass("completed");
    });
})




