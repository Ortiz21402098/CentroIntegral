
<template>
    <div class="card" id="info">
    <div class="card-header" style="background-color: #dafae9; border-color: #dafae9;">
      <h2 style="font-size: 250%;">Bienvenid@ a Integramente: Centro de salud mental</h2>
    </div>
    <div class="card-body">
      <figure>
        <blockquote class="blockquote">
          <p>Nos dedicamos a brindar atención integral y personalizada a cada uno de nuestros pacientes, con un enfoque humano, ético y profesional. Nuestro objetivo es acompañar a cada persona en su proceso de bienestar emocional y psicológico, ofreciendo un espacio seguro, confidencial y libre de estigmas.</p>
          <p>Contamos con un equipo de profesionales altamente capacitados en psicología, psiquiatría y psicopedagogía. Trabajamos desde una perspectiva centrada en la persona, promoviendo el respeto, la empatía y la escucha activa.</p>
          <p>Ofrecemos servicios de:</p>
          <p style="margin-left: 3%;"> ● Evaluación y diagnóstico clínico</p>
          <p style="margin-left: 3%;"> ● Psicoterapia individual, familiar y grupal</p>
          <p style="margin-left: 3%;"> ● Acompañamiento psiquiátrico y seguimiento farmacológico</p>
          <p style="margin-left: 3%;"> ● Talleres psicoeducativos</p>
          <p style="margin-left: 3%;"> ● Orientación a familias y cuidadores</p>
          <p>En Íntegramente, creemos que cuidar la salud mental es esencial para una vida plena y significativa. Por eso, fomentamos el acceso a tratamientos de calidad, adaptados a las necesidades de cada persona, en todas las etapas de la vida.</p>
          <p>Te invitamos a conocernos y a dar el primer paso hacia tu bienestar.</p>
        </blockquote>
      </figure>
    </div>
  </div>
  <h1>Nuestros especialistas</h1>  
  <div class="especialistas" style="display: flex; margin-top: 3%;"> 
    <div class="card" style="width: 18rem;" id="medic">
      <img src="@/assets/Sofia.jpg" class="card-img-top" alt="Sofia Rodríguez">
      <div class="card-body">
        <h3>Sofia Rodríguez</h3>
        <p class="card-text">Psicopedagoga</p>
      </div>
    </div>
    <div class="card" style="width: 18rem;" id="medic">
      <img src="@/assets/Tomas.jpg" class="card-img-top" alt="Tomás Herrera">
      <div class="card-body">
        <h3>Tomás Herrera</h3>
        <p class="card-text">Psiquiatra</p>
      </div>
    </div>  
    <div class="card" style="width: 18rem;" id="medic">
      <img src="@/assets/Lucia.jpg" class="card-img-top" alt="Lucia Fernández">
      <div class="card-body">
        <h3>Lucia Fernández</h3>
        <p class="card-text">Psicologa</p>
      </div>
    </div>
  </div>
  <div class="especialistas" style="display: flex; margin-top: 5%;"> 
    <div class="card" style="width: 18rem;" id="medic">
      <img src="@/assets/Mateo.jpg" class="card-img-top" alt="Mateo Castillo">
      <div class="card-body">
        <h3>Mateo Castillo</h3>
        <p class="card-text">Psicologo</p>
      </div>
    </div>
    <div class="card" style="width: 18rem;" id="medic">
      <img src="@/assets/Camila.jpg" class="card-img-top" alt="Camila Torres">
      <div class="card-body">
        <h3>Camila Torres</h3>
        <p class="card-text">Psiquiatra</p>
      </div>
    </div>  
    <div class="card" style="width: 18rem;" id="medic">
      <img src="@/assets/Mirna.jpg" class="card-img-top" alt="Mirna Gómez">
      <div class="card-body">
        <h3>Mirna Gómez</h3>
        <p class="card-text">Psicopedagoga</p>
      </div>
    </div>
  </div>
</template>


<style>
#info {
  width: 85%; 
  justify-self: center; 
  margin-bottom: 5%; 
  border-color: #dafae9;
  box-shadow: #949494 0px 0px 10px;
}
h1 {
  text-align: center;
  margin-top: 2%;
}
.especialistas {
  margin-left: 17%;
}
#medic {
  margin-right: 10%;
  margin-bottom: 2%;
}
</style>






