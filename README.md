Para poder ejecutar la aplicación en cualquier ordenador, se ha de contar con las siguientes herramientas instaladas:

- **Node.js**: entorno donde se desplegará el cliente. Permite la instalación de **npm**, que se encarga de gestionar los paquetes de Node.js.
- **IntelliJ Idea** o cualquier **Java SE Development Kit (JDK) versión 15.0 o superior**: necesario para poder ejecutar los archivos que contienen el servidor de la aplicación.
- **MongoDB**: sistema de base de datos NoSQL necesario para poder emplear la base de datos de la aplicación.

Una vez hemos instalado estos tres programas, procedemos al despliegue. Para poder proceder al despligue de la **capa de servicios** (elegir una de las dos opciones):

- En caso de contar con un JDK instalado en nuestro ordenador:

1. Acceder al directorio _Servidor_ en la carpeta del proyecto.
2. Ejecutar el archivo _TFG-Servidor.jar_.

- En caso de contar con Intellij Idea en nuestro ordenador:

1. Ejecutar la aplicación de IntelliJ Idea en nuestra máquina.
2. Pinchar en _Open Project_ y seleccionamos la carpeta _Servidor_ que se encuentra dentro del directorio proyecto.
3. Ejecutar el archivo _Application.java_.
4. Una vez se ha ejecutado, esperamos unos segundos para que termine de compilar. El servicio será desplegado en el puerto 8000 (acceso mediante _http://localhost:8000/_).

En cuanto al despliegue de la parte del **cliente**:

1. Abrir cualquier terminal disponible en el ordenador (por ejemplo, _Símbolos del Sistema de Windows_ (CMD)).
2. Acceder a la carpeta _Cliente_ dentro del directorio del proyecto.
3. Ejecutar el comando _npm install_.
4. Ejecutar el comando _npm start_.
5. Se abrirá una pestaña en el navegador predeterminado. Este proceso puede demorarse unos minutos. En caso de no abrirse automáticamente, se puede acceder manualmente accediendo al puerto 3000, _http://localhost:3000/_.

Por último, cabe indicar que por motivos de seguridad se ha de introducir un usuario a mano en la base de datos. Esto se debe a que en la aplicación solo se permite registrar usuarios cuando existe un administrador. Es por ello que se debe acceder a MongoDB, crear una nueva base de datos denominada "tfg", y la colección ha de ser "users". Importaremos el archivo _data.json_ (situado en el directorio raíz del proyecto), que contiene el usuario inicial.

Cuando sea el caso de iniciar sesión por primera vez, habrá que acceder con el email _usuario@usuario.com_ y la contraseña _Abc123.._.
