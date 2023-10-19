## Construyendo una Aplicación de Gestión de Tareas

# Los endpoints estan harcodeados.

Descripción:

En este ejercicio, tus alumnos crearán una aplicación simple de gestión de tareas utilizando Node.js y Sequelize. La aplicación permitirá a los usuarios crear, ver, actualizar y eliminar tareas.

Pasos:

    Configuración del Proyecto:
        Configura un nuevo proyecto Node.js e instala Sequelize y la base de datos SQLite.
        Crea un modelo Tarea con los siguientes campos:
            id (clave primaria, autoincremental)
            titulo (cadena de texto)
            descripcion (cadena de texto)
            completada (booleano)

    Crear Rutas y Controladores:
        Crea rutas y controladores para realizar las siguientes operaciones:
            Crear una nueva tarea.
            Ver todas las tareas.
            Ver una tarea específica por su ID.
            Actualizar una tarea existente (marcar como completada o cambiar el título/descripción).
            Eliminar una tarea.

    Pruebas:
        Crea un script de prueba que utilice las rutas y controladores para realizar operaciones básicas de CRUD (Crear, Leer, Actualizar, Eliminar).

    Entrega:
        Los alumnos deberán enviar el código del proyecto junto con un documento explicando cómo funciona la aplicación y cualquier mejora o funcionalidad adicional que hayan agregado.

Extras (Opcionales):

    Implementar validaciones para los campos de la tarea (por ejemplo, el título no puede estar vacío).
    Agregar una funcionalidad de filtrado para ver solo tareas completadas o incompletas.
    Implementar autenticación de usuarios para que cada usuario pueda tener sus propias tareas.