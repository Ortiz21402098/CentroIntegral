<script>
export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      fechaNacimiento: '',
      especialista: '',
      fechaTurno: '',
      horaTurno: '',
      turnosExistentes: []
    };
  },
  methods: {
    consultarTurno() {
      const turnoExistente = this.turnosExistentes.find(turno =>
        turno.especialista === this.especialista &&
        turno.fecha === this.fechaTurno &&
        turno.hora === this.horaTurno
      );

      if (turnoExistente) {
        alert('⚠️ El especialista ya tiene un turno reservado en esa fecha y hora.');
      } else {
        alert('✅ El turno está disponible.');
      }
    }
  }
};
</script>
<template>
  <div class="turnos">
    <form @submit.prevent="consultarTurno">
      <div class="mb-3">
        <label class="form-label">Nombre</label>
        <input type="text" class="form-control" v-model="nombre" />
      </div>
      <div class="mb-3">
        <label class="form-label">Apellido</label>
        <input type="text" class="form-control" v-model="apellido" />
      </div>
      <div class="mb-3">
        <label class="form-label">Fecha de nacimiento</label>
        <input type="date" class="form-control" v-model="fechaNacimiento" />
      </div>
      <div class="mb-3">
        <label class="form-label">Especialista</label>
        <select class="form-control" v-model="especialista">
          <option disabled value="">Seleccione un especialista</option>
          <option>Sofia Rodríguez (Psicopedagoga)</option>
          <option>Mirna Gómez (Psicopedagoga)</option>
          <option>Tomás Herrera (Psiquiatra)</option>
          <option>Mateo Castillo (Psicologo)</option>
          <option>Lucía Fernández (Psicologa)</option>
          <option>Camila Torres (Psiquiatra)</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Fecha del turno solicitado</label>
        <input type="date" class="form-control" v-model="fechaTurno" />
      </div>
      <div class="mb-3">
        <label class="form-label">Horario del turno solicitado</label>
        <input type="time" class="form-control" v-model="horaTurno" />
      </div>
      <button type="submit" class="btn btn-primary" id="botontur">Consultar turno</button>
    </form>
  </div>
</template>

<style> 
.turnos {
    width: 30%;
    height: 100%;
    margin-left: 35%;
    margin-bottom: 10%;
}
#botontur{
    margin-right: 1%;
    margin-bottom: 1%;
    background-color: rgb(99, 138, 126);
    border-color: rgb(99, 138, 126);
    color: rgb(255, 255, 255);
    font-weight: 500;
    font-size: 1.2rem;
    text-decoration: none;
}
#botontur:hover {
  background-color: rgb(73, 101, 91);
  border-color: rgb(73, 101, 91);
}
</style>