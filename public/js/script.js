
const socket = io();
// Compila la plantilla del cuerpo de la tabla.
const bodyTemplate = Handlebars.compile(`{{#each productos}}
                                        <tr>
                                            <td>{{id}}</td>
                                            <td>{{title}}</td>
                                            <td>{{price}}</td>
                                            <td>{{stock}}</td>
                                        </tr>
                                    {{/each}}`);

socket.on('List', (productos) => {

  // Inserta el cuerpo de la tabla en el documento HTML.
  const body = bodyTemplate({ productos });
  document.getElementById('prods').innerHTML = body;
});





