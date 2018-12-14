(function() {
  // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
  // document.getElementsByClassName('')

  if (!String.prototype.trim) {
    (function() {
      // Make sure we trim BOM and NBSP
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
        return this.replace(rtrim, '');
      };
    })();
  }

  [].slice.call( document.getElementsByClassName( 'input__field' ) ).forEach( function( inputEl ) {
    console.log(inputEl.value.trim());
    // in case the input is already filled..
    if( inputEl.value.trim() !== '' && inputEl.value.trim() !== 'Geschlecht' ) {
      classie.add( inputEl.parentNode, 'input--filled' );
    }

    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  } );

  function onInputFocus( ev ) {
    classie.add( ev.target.parentNode, 'input--focus' );
  }

  function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' || ev.target.value.trim() === 'Geschlecht' ) {
      classie.remove( ev.target.parentNode, 'input--filled' );
      classie.remove( ev.target.parentNode, 'input--focus' );
      classie.add( ev.target.parentNode, 'input--filled--empty' );
    }
    else {
      classie.remove( ev.target.parentNode, 'input--filled--empty' );
      classie.remove( ev.target.parentNode, 'input--focus' );
      classie.add( ev.target.parentNode, 'input--filled' );
    }
  }
})();

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
