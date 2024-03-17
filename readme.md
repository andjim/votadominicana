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

### 4. Ejecutemos la aplicacion

Para Inicializar la aplicacion:

`(venv) user@pc:~/votadominicana$`<b>`docker compose -f compose-development-env.yaml up -d`</b>

Para detener la aplicacion:

`(venv) user@pc:~/votadominicana$`<b>`docker compose -f compose-development-env.yaml up stop`</b>

Para volver a ejecutar la aplicacion:

`(venv) user@pc:~/votadominicana$`<b>`docker compose -f compose-development-env.yaml up start`</b>

Para hacer que la aplicacion reinicie:

`(venv) user@pc:~/votadominicana$`<b>`docker compose -f compose-development-env.yaml up restart`</b>

### 5. Aplicar cambios a la base de datos

Al momento de inicializar la aplicacion por primera vez, o luego de modificar la estructura de los modelos de
base de datos (campo,tablas), se deben de aplicar migraciones.

Para aplicar las migraciones en nuestro entorno de desarrollo debemos tener la aplicacion en ejecucion, y luego ejecutar la siguiente secuencia de scripts:

1. `docker container exec -t votadominicana-django_app-1 python votadom/manage.py makemigrations`
2. `docker container exec -t votadominicana-django_app-1 python votadom/manage.py migrate`

## Contribuciones
Trabajaremos las mejoras por issues para la distribucion y seguimiento de las tareas.

Recuerden configurar su cliente de git en su maquina local para las firmas de los commits.

## Licencia
[![License: GPL v2](https://img.shields.io/badge/License-GPLv2-blue.svg)](https://www.gnu.org/licenses/gpl-2.0.html)
