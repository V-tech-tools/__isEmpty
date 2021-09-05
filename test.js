
const [v_con, cs, clearConsole, log, logInfo, logWarn, logError ] = require ('v__console.utility');
const [isEmpty, isNotEmpty ] = require('./v_is_empty');

// Simple listing
log( "isEmpty()" );

log( "R> " + isEmpty() + " :: E> true  || isEmpty()");
log( "R> " + isEmpty('') + " :: E> true || isEmpty('')");

var xV2 = NaN;
log( "R> " + isEmpty(xV2)  + " :: E> true || isEmpty(xV2) -- xV2=NaN");

var X11;
log( "R> " + isEmpty(X11)  + " :: E> true || isEmpty(X11) -- var X11");

X11 = 11;
log( "R> " + isEmpty(X11) + " :: E> false || isEmpty(X11) -- X11=11" );

//---------------------

log( "R> " + isNotEmpty() + " :: E> false || isNotEmpty()" );

var Y11;
log( "R> " + isNotEmpty(Y11) + " :: E> false || isNotEmpty(Y11) -- var Y11" );

Y11 = 11;
log( "R> " + isNotEmpty(Y11) + " :: E> true || isNotEmpty(Y11) -- Y11=11" );

var yV2 = NaN;
log( "R> " + isNotEmpty(yV2)  + " :: E> false || isNotEmpty(yV2) -- yV2=NaN");
