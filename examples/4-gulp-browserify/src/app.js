import adder from './modules/add.js';
import qsa from './modules/qsa.js';
import addClass from './modules/maps/add-class-map.js';
import onReady from './modules/on-ready.js';


console.log( adder(1,2,3,4,5) );


onReady(e=> {

	console.log('loaded!!');

	qsa('a:not([class])')
		.map( addClass('no-class') );

});



