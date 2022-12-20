const $d = document;

const boton = $d.querySelector("#OK");

boton.addEventListener("click", function () {

  const tarea = $d.querySelector(".tareas");

  const priority = $d.querySelector(".seleccion");

  const prioritySelected = priority.options[priority.selectedIndex].text;

  const priorityValueSelected = priority.options[priority.selectedIndex].value;

  const fila2 = $d.createElement("tr");

  const tabla = $d.querySelector(".tabla");

  tabla.insertAdjacentElement("beforeend", fila2);

  const td1 = $d.createElement("td");
  const td2 = $d.createElement("td");

  fila2.appendChild(td1);
  fila2.appendChild(td2);

  td1.textContent = tarea.value;

  td2.textContent = prioritySelected;

  if(priorityValueSelected==3){


    


  }

  

});
