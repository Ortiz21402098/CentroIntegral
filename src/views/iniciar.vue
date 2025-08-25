<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const correo = ref('')
const password = ref('')
const iniciar = () => {
  if (correo.value && password.value) {
    alert('Inicio de sesión exitoso')
    router.push('/')
  } else {
    alert('Por favor, completa todos los campos')
  }
}
</script>

<template>
  <h1 style="margin-bottom: 2%;">Iniciar sesión</h1>
    <div class="iniciar">
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Correo electronico</label>
    <input type="email" class="form-control" v-model="correo" id="exampleInputEmail1" aria-describedby="emailHelp" style="border-color: rgb(185, 185, 185);">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" style="border-color: rgb(185, 185, 185);">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" style="border-color: rgb(185, 185, 185);">
    <label class="form-check-label" for="exampleCheck1">Recuerdame</label>
  </div>
  <div>
    <a href="/cuenta" class="btn btn-link" style="color: rgb(99, 138, 126); margin-top: -3%;">No tengo una cuenta</a>
  </div>
  <button type="submit" class="btn btn-primary" id="botonin" @click="iniciar()">Iniciar</button>
</form>
    </div>
</template>

<style>
.iniciar {
    width: 30%;
    height: 100%;
    margin-left: 35%;
    margin-bottom: 10%;
}
#botonin{
    margin-right: 1%;
    margin-bottom: 1%;
    background-color: rgb(99, 138, 126);
    border-color: rgb(99, 138, 126);
    color: rgb(255, 255, 255);
    font-weight: 500;
    font-size: 1.2rem;
    text-decoration: none;
}
#botonin:hover {
  background-color: rgb(73, 101, 91);
  border-color: rgb(73, 101, 91);
}
</style>