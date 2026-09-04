document.addEventListener('DOMContentLoaded', () => {
  const form1 = document.getElementById('formulario1');
  const form2 = document.getElementById('formulario2');

  const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ==========================================
  // VALIDACIÓN FORMULARIO 1
  // ==========================================
  if (form1) {
    form1.addEventListener('submit', (e) => {
      e.preventDefault();
      limpiarErrores(form1);
      let esValido = true;

      // 1. Nombre
      const nombre = document.getElementById('name');
      const valNombre = nombre.value.trim();
      if (valNombre === '') {
        mostrarError(nombre, 'El nombre es obligatorio.');
        esValido = false;
      } else if (!regexNombre.test(valNombre)) {
        mostrarError(nombre, 'Ingresa un nombre real (sin números ni símbolos).');
        esValido = false;
      }

      // 2. Correo
      const email = document.getElementById('email');
      if (email.value.trim() === '') {
        mostrarError(email, 'El correo es obligatorio.');
        esValido = false;
      } else if (!regexEmail.test(email.value.trim())) {
        mostrarError(email, 'Ingresa un correo electrónico válido.');
        esValido = false;
      }

      // 3. Contraseñas
      const pass = document.getElementById('password');
      const confirmPass = document.getElementById('confirm-password');

      if (pass.value === '') {
        mostrarError(pass, 'La contraseña es obligatoria.');
        esValido = false;
      } else if (pass.value.length < 8) {
        mostrarError(pass, 'La contraseña debe tener al menos 8 caracteres.');
        esValido = false;
      }

      if (confirmPass.value === '') {
        mostrarError(confirmPass, 'Confirma tu contraseña.');
        esValido = false;
      } else if (pass.value !== confirmPass.value) {
        mostrarError(confirmPass, 'Las contraseñas no coinciden.');
        esValido = false;
      }

      // 4. Pokémon Favorito (Radio button)
      const pokemonSeleccionado = form1.querySelector('input[name="pokemon-favorito"]:checked');
      if (!pokemonSeleccionado) {
        const container = form1.querySelector('.checkbox-group-container');
        mostrarErrorEnContenedor(container, 'Debes seleccionar una opción.');
        esValido = false;
      }

      // 5. Región
      const region = document.getElementById('region-pokemon');
      if (region.value === '') {
        mostrarError(region, 'Selecciona una región.');
        esValido = false;
      }

      if (esValido) {
        alert('¡Formulario 1 validado con éxito!');
      }
    });
  }

  // ==========================================
  // VALIDACIÓN FORMULARIO 2
  // ==========================================
  if (form2) {
    form2.addEventListener('submit', (e) => {
      e.preventDefault();
      limpiarErrores(form2);
      let esValido = true;

      // 1. Tipo de cartas
      const cardType = document.getElementById('card-type');
      if (cardType.value.trim() === '') {
        mostrarError(cardType, 'Especifica qué tipo de cartas buscas.');
        esValido = false;
      }

      // 2. Participación en sorteos (Sí/No)
      const sorteoSeleccionado = form2.querySelector('input[name="sorteos"]:checked');
      if (!sorteoSeleccionado) {
        const container = form2.querySelector('.checkbox-group-container');
        mostrarErrorEnContenedor(container, 'Selecciona si deseas participar en los sorteos.');
        esValido = false;
      }

      // 3. Preferencias de colección (Select #coleccionar)
      const coleccionar = document.getElementById('coleccionar');
      if (coleccionar.value === '') {
        mostrarError(coleccionar, 'Por favor, selecciona qué sueles coleccionar.');
        esValido = false;
      }

      if (esValido) {
        alert('¡Registro completo finalizado con éxito!');
      }
    });
  }

  // ==========================================
  // FUNCIONES AUXILIARES
  // ==========================================
  function mostrarError(element, mensaje) {
    element.classList.add('input-error');
    const errorSpan = document.createElement('span');
    errorSpan.className = 'error-message';
    errorSpan.innerText = mensaje;
    element.parentNode.appendChild(errorSpan);
  }

  function mostrarErrorEnContenedor(container, mensaje) {
    const errorSpan = document.createElement('span');
    errorSpan.className = 'error-message';
    errorSpan.innerText = mensaje;
    container.appendChild(errorSpan);
  }

  function limpiarErrores(formulario) {
    const errores = formulario.querySelectorAll('.error-message');
    errores.forEach(error => error.remove());

    const inputs = formulario.querySelectorAll('.input-error');
    inputs.forEach(input => input.classList.remove('input-error'));
  }
});