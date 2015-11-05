document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('typebox').addEventListener('keyup', function(greetingKeyUp) {
    window.greeting = greetingKeyUp.target.value;
    document.getElementById('say').innerHTML = window.greeting;
  });
});
