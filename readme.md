# VotaDominicana

Proyecto Monografico Grupo #8. Asesorado por el Prof. Carlos Lajara.

## Indice
- [Prerequisitos](#prerequisitos)
- [Configuracion del Entorno de Desarrollo](#configuracion-del-entorno-de-desarrollo)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Prerequisitos
- Python
- Docker
- pip
- virtualenv
- nodejs
- npm
- git

## Configuracion del Entorno de Desarrollo 

### 1. Descargar repositorio del proyecto

Se puede descargar directemente desde la pagina web de github. En el caso de querer hacerlo por `powershell`, `cmd`, o `bash`:

por HTTPS:
`git clone https://github.com/andjim/votadominicana.git`

por SSH:
`git clone git@github.com:andjim/votadominicana.git`

### 2. Creacion de Entorno Virtual
Para eso haremos uso de `virtualenv`, el cual nos crea un entorno donde se encapsulan las dependencias y variables de entorno de un proyecto evitando conflictos de dependencias con otros proyectos y viceversa.

Creamos el entorno virtual con el comando : `user@pc:~/votadominicana$`<b>`virtualenv venv`</b>
Nos crea una carpeta con el nombre especificado `venv`.
```
- votadominicana
|---- venv
|------- bin
|----------- activate
|----------- activate.ps
|----------- ...
|------- lib
|------- ...
```
Par activar el entorno virtual se ejecuta el comando siguiente:

BASH:
`user@pc:~/votadominicana$`<b>`source ./venv/bin/activate`</b>

PowerShell o CMD:
`PS C:\Users\user\votadominicana>` <b>`.\env\bin\activate`</b>

Tu terminal se mostrara con el nombre del entorno entre parentesis al principio de la linea, indicando que tu entorno virtual esta activo.

- CMD
`(venv) C:\Users\user\votadominicana>`
- PowerShell
`(venv) PS C:\Users\user\votadominicana>`
- Bash
`(venv) user@pc:~/votadominicana$`

Para desacticarlo solo debes ejecutar el comando `deactivate` en tu linea de comandos.

### 3. Instalando dependencias

Instalamos las dependencias en nuestro entorno de desarrollo para poder aplicar mejoras y modificaciones al codigo del aplicativo.

- Dependencias de Javascript para el frontend
`(venv) user@pc:~/votadominicana$` <b>`npm install`</b>
- Dependencias de Python para el Backend
`(venv) user@pc:~/votadominicana$` <b>`pip install -r requirements.txt`</b>

### 4. Creando la imagen de docker

Creamos a imagen del aplicativo para luego ejecutar el contenedor:

`(venv) user@pc:~/votadominicana$` <b>`docker build -t votadominicana:dev-0.0.1 .`</b>

Este paso seria por el momento, proximamente la imagen estaria disponible para la descarga sin necesidad de que cada quien tenga que construirla.

### 5. Ejecutemos la aplicacion

Para ejecutar la aplicacion crearemos un contenedor.

`(venv) user@pc:~/votadominicana$`<b>`docker run --name app -it -p 8080:8080 -v [ruta-absoluta]/votadominicana/votadom:votadom votadominicana:dev-0.0.1`</b>

- <b>`--name [nombre contenedor]`</b>: agregar alias al contenedor.
- <b>`-it`</b>: conexion interactiva con el contenedor, permite ver que pasa dentro e interactuar por comandos.
- <b>`-p [puerto de tu pc]:[puerto del contendor]`</b>: sirve para hacer forward o publicar el puerto del contenedor hacia el de la pc, permitiendo exponerlo al exterior y recibir y enviar requests.
- <b>`-v [ruta absoluta de la carpeta en tu pc]:[carpeta del contenedor]`</b>: le indicaremos que la tome la carpeta `votadominicana/votadom` y la conecte con la carpeta interna del contenedor llamada `/votadom`.

## Contribuciones
Trabajaremos las mejoras por issues para la distribucion y seguimiento de las tareas.

Recuerden configurar si cliente de git en su maquina local para las firmas de los commits.

## Licencia
GNU General Public License v2
