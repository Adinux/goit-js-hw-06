document.getElementById('validation-input').addEventListener('blur', function() {
    const length = this.getAttribute('data-length');
    this.classList.toggle('valid', this.value.length == length);
    this.classList.toggle('invalid', this.value.length != length);
  });