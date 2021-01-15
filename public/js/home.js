$.get( "/api/tables" ).then( data => {
    console.log( data );
    data.forEach( user => {
        const newCard = $( '<div>' );
        newCard.addClass( "card" );

        const newCardId = $( "<h4>" );
        newCardId.text( user.id );
        newCard.append( newCardId );

        const newCardName = $( "<h4>" );
        newCardName.text( user.name );
        newCard.append( newCardName );

        const newCardPhone = $( "<h4>" );
        newCardPhone.text( user.phone );
        newCard.append( newCardPhone );

        const newCardEmail = $( "<h4>" );
        newCardEmail.text( user.email );
        newCard.append( newCardEmail );

        $( "#tableCards" ).append( newCard );

    })
})

$.get( "/api/waitlist" ).then( data => {
    console.log( data );
    data.forEach( user => {
        const newCard = $( '<div>' );
        newCard.addClass( "card" );

        const newCardId = $( "<h4>" );
        newCardId.text( user.id );
        newCard.append( newCardId );

        const newCardName = $( "<h4>" );
        newCardName.text( user.name );
        newCard.append( newCardName );

        const newCardPhone = $( "<h4>" );
        newCardPhone.text( user.phone );
        newCard.append( newCardPhone );

        const newCardEmail = $( "<h4>" );
        newCardEmail.text( user.email );
        newCard.append( newCardEmail );

        $( "#waitlistCards" ).append( newCard );

    })
})