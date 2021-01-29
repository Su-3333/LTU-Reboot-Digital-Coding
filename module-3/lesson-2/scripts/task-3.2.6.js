var cloudy = 'yes';
var raining = 'dry';

if (cloudy === 'yes' && raining === 'wet'){
    document.write ('wear a raincoat');
} else if (cloudy === 'yes' && raining === 'no'){
    document.write ('carry a raincoat');
} else if ( cloudy === 'no' || raining ==='dry') { 
    document.write ('enjoy the dry weather');
} else { document.write ('Try again');}


