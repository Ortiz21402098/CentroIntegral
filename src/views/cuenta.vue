<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const usuario = ref('')
const correo = ref('')
const password = ref('')
const confirmar = ref('')
const regis = () => {
  if (usuario.value && correo.value && password.value && confirmar.value) {
    if (password.value === confirmar.value) {
      alert('Cuenta creada exitosamente')
      router.push('/iniciar')
    } else {
      alert('Las contraseñas no coinciden')
    }
  } else {
    alert('Por favor, completa todos los campos')
  }
}
</script>
<template>
  <h1 style="margin-bottom: 2%;">Crea una cuenta</h1>
    <div class="registro">
        <form>
   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre de usuario</label>
    <input type="text" class="form-control" v-model="usuario" id="exampleInputEmail1" aria-describedby="emailHelp" style="border-color: rgb(185, 185, 185);">
   </div>         
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Correo electronico</label>
    <input type="email" class="form-control" v-model="correo" id="exampleInputEmail1" aria-describedby="emailHelp" style="border-color: rgb(185, 185, 185);">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" style="border-color: rgb(185, 185, 185);">
  </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Confirmar contraseña</label>
        <input type="password" class="form-control" v-model="confirmar" id="exampleInputPassword1" style="border-color: rgb(185, 185, 185);">
    </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" style="border-color: rgb(185, 185, 185);">
    <label class="form-check-label" for="exampleCheck1">Recuerdame</label>
  </div>
  <button type="submit" class="btn btn-primary" id="botonin" @click="regis()">Registrarme</button>
</form>
    </div>
</template>

<style>
.registro{
    width: 30%;
    height: 100%;
    margin-left: 35%;
    margin-bottom: 10%;
}
</style>
