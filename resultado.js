$(document).ready(
    function(){
          var Params = new URLSearchParams(location.search);
          var id = Params.get("opcao");

          $.ajax({
            url:"http://jsonplaceholder.typicode.com/posts/"+id,
            type:"GET",
            success:function(data){
                console.log(data);
                $('#titulo').append(data.title);
                $("#corpo").append('<p>'+data.body+'</p>')
            },
            error:function(data){
            }
        })
        $.ajax({
            url:"http://jsonplaceholder.typicode.com/posts/"+id+"/comments",
            type:"GET",
            success:function(data){
                $.each(data,function(i,item){
                    $("#comentarios").append(
                        '<div>' +
                            '<b>'+item.name+'</b><br>'+
                             item.email+
                             '<p>'+item.body+'</p>'+
                             '</div><br>'
                    )

                })  
            },
            error:function(data){
            }
        })  
    }   
)