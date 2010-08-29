assertEquals = equals;
assertTrue = ok;
assertNotUndefined = function( v ) { ok(typeof(v) != 'undefined'); }
assertUndefined = function( v ) { ok(typeof(v) == 'undefined'); }
assertNotNull = function( v ) { ok(v !== null); }

function emulateJsUnit() {
	for(var k in window) {
		if(k.beginsWith('test') && typeof(window[k]) == 'function') {
			test( k, window[k] );
		}
	}
}
