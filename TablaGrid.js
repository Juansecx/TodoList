const $d = document;

const boton = $d.getElementById("OK");

boton.addEventListener("click", function () {
  const tarea = $d.querySelector(".tareas");

  const priority = $d.querySelector(".seleccion");

  const prioritySelected = priority.options[priority.selectedIndex].text;

  const priorityValueSelected = priority.options[priority.selectedIndex].value;

  const tabla = $d.querySelector(".tabla");

  const fila1 = $d.createElement("div");

  fila1.setAttribute("class", "fila1");

  const fila2 = $d.createElement("div");

  fila2.setAttribute("class", "fila2");

  fila1.textContent = tarea.value;

  fila2.textContent = prioritySelected;

  tabla.appendChild(fila1);
  tabla.appendChild(fila2);

  if (priorityValueSelected == 3) {
    /* fila2.style.gridRow="2/3";
        fila2.style.gridColumn="2/3";

        fila1.style.gridRow=" 2 / 3";
        fila1.style.gridColumn="1/2";
    */

    const div1Alta = $d.createElement("div");
    const div2Alta = $d.createElement("div");

    tabla.insertAdjacentElement("afterbegin", div1Alta);

    div1Alta.setAttribute("class","fila1Alta");

    div1Alta.appendChild(fila1);

    div1Alta.insertAdjacentElement("afterend", div2Alta);

    div2Alta.setAttribute("class","fila2Alta");
    div2Alta.appendChild(fila2);

  }
  
  if (priorityValueSelected == 1) {




    





   
  }

  
});
