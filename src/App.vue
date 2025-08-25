<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template> 
  <header style="display: block; background-color: #dafae9; margin-bottom: 3%;">
    <img alt="Vue logo" class="logo" src="@/assets/top.png" style="width: 100%; margin-bottom: 2%;"/>
    <div class="btn-group" style="display: block;">
      <nav>
        <RouterLink to="/" class="btn btn-primary" id="botonesar">Inicio</RouterLink>
        <RouterLink to="/turno" class="btn btn-primary" id="botonesar">Turnos</RouterLink>
        <RouterLink to="/nosotros" class="btn btn-primary" id="botonesar">Contacto</RouterLink>
        <RouterLink to="/iniciar">
          <img alt="Vue logo" class="persona" src="@/assets/person.svg" style="cursor: pointer;"/>
        </RouterLink>
      </nav>
    </div>  
  </header>
  <RouterView />
  <footer>
    <h1></h1>
    <p class="text-center text-white" style="margin-bottom: -0.2%;">Diseñado por Pamela Peralta y Joaquin Leiva</p>
    <p class="text-center text-white">© 2025 Integramente. Todos los derechos reservados.</p>
  </footer>
</template>

<style> 
body {
  background-color: #eafcf3;
}
nav {
  display: flex;
  justify-self: center;
}
footer{
  width: 100%;
  background-color: rgb(99, 138, 126);
}
#botonesar {
  margin-right: 5%;
  margin-bottom: 1%;
  background-color: rgb(127, 180, 162);
  border-color: rgb(127, 180, 162);
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-size: 1.2rem;
  text-decoration: none;
}
#botonesar:hover {
  background-color: rgb(92, 130, 117);
  border-color: rgb(92, 130, 117);
}

.persona {
  width: 3%;
  position: absolute;
  top: 1%;
  right: 1%;
}
</style>
