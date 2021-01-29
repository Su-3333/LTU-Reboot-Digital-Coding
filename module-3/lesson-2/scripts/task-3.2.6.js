var cloudy = 'no';
var raining = 'wet';

if (cloudy === 'yes' && raining === 'wet'){
    document.write ('wear a raincoat');
} else if (cloudy === 'yes' && raining === 'no'){
    document.write ('carry a raincoat');
} else if ( cloudy === 'no' && raining ==='dry') { 
    document.write ('enjoy the dry weather');
}else if ( cloudy === 'no' && raining ==='wet') { 
        document.write ('you are under the water sprinkler');
} else { document.write ('Try again');}


