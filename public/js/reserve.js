$( "#reserveForm" ).on( 'submit', e => {
    e.preventDefault();
    const userData = {
        id: $( '#resId' ).val(),
        name: $( '#resName' ).val(),
        email: $( '#resEmail' ).val(),
        phone: $( '#resPhone' ).val()
    }
    console.log( 'user data' );
    console.log( userData );
    $.post( '/reserve', userData ).then( data => {
        console.log( "API RESPONSE" );
        console.log( data );
        if ( data.hasTable ) {
            alert( "You got a table, bro!" );
        } else {
            alert( "too slow, yo.")
        }
    })
})