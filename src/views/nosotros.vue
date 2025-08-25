<template>
  <div class="accordion" id="contact" style="width: 60%; justify-self: center; margin-bottom: 15%;">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Número de contacto
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
      3564 94-3838   
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Correo electrónico
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
      integramente@gmail.com
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Dirección
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
        Tucumún 1039, San Francisco, Córdoba, Argentina 
      </div>
    </div>
  </div>
</div>
</template>

<style>
#panelsStayOpen-collapseOne {
  font-size: 180%;
}
#panelsStayOpen-collapseTwo {
  font-size: 180%;
}
#panelsStayOpen-collapseThree {
  font-size: 180%;
}
.accordion-button {
  background-color: #dafae9;
  color: #000;
  border-color: #dafae9;
}
.accordion-button:hover {
  background-color: #ccefe2;
  border-color: #ccefe2;
}

</style>