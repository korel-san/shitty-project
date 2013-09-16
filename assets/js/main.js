$(document).ready(function() {
    var Main = Backbone.View.extend({
            tagName:"div",
            className:"container",

            events:{
                "click input[type='submit']":"sendData",
            },

            initialize:function () {

            },

            sendData: function ( ) {
                console.log('data');
                var data = {};

                $('.words-input input[type=text]').each(function(key, item){ 
                    data[item.name] = item.value; 
                });

                console.log(data);

                $.ajax({
                    type: "GET",
                    url: "/words/create?",
                    data: data
                }).done(function( msg ) {
                    alert( "Data Saved: " + msg );
                });
            }
        });
    main = new Main({ el : $('body').get(0) });
    main.render();
});