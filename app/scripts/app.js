import $ from 'jquery';

// JS skill range slider
const range = $( '.skills-slider__label' );
const pointer = $( '.skills-slider__pointer' );

range.click(function () {
	const currentRange = pointer.attr( 'class' ).split(' ').slice(1);
	const chosenRange = $( this ).attr( 'class' ).split(' ').slice(1);

	pointer.removeClass( currentRange[0] );

	switch ( chosenRange[0] ) {
		case 'skills-slider__label_no':
			pointer.addClass( 'skills-slider__pointer_no' );
			break;
		case 'skills-slider__label_use':
			pointer.addClass( 'skills-slider__pointer_use' );
			break;
		case 'skills-slider__label_edit':
			pointer.addClass( 'skills-slider__pointer_edit' );
			break;
		case 'skills-slider__label_write':
			pointer.addClass( 'skills-slider__pointer_write' );
			break;
	}
});
