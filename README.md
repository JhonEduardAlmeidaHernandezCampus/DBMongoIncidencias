# DBMongoIncidencias

Se crea una base de datos para la gestión de citas



## INSTALACIÓN

1. Para descargar Node.js ve a la siguiente página "[Download | Node.js (nodejs.org)](https://nodejs.org/en/download)".

2. Descarga la versión de Node.js correspondiente a su sistema operativo.

3. Clona este repositorio en tu máquina local.

   - https://github.com/JhonEduardAlmeidaHernandezCampus/DBMongoIncidencias.git

4. Abre una terminal en el editor de código de tu preferencia, se recomienda "Visual Studio Code".

5. Abra la terminal y ejecute el siguiente comando

   ```
   cd backend
   ```

   

   1. Se va a parar dentro de la carpeta backend, ahí se encuentra el archivo package.json

6. Ejecuta el siguiente comando para instalar las dependencias:

   `NOTA:` Las dependencias a utilizar ya vienen dentro del proyecto, solo clone el repositorio y abra la terminal e ingrese el siguiente comando.

```
npm install;
```



## CONFIGURACIÓN

1. Asegurarse de tener creada la base de datos, si no cuentas con una base de datos, este proyecto ya trae una por defecto en la ruta

   ```
   db/helpers/db.mongodb
   ```

   

2. Crea un archivo .env en donde va a generar sus variables de entorno "Este proyecto ya trae un ejemplo por defecto"

   ```
   .env
   ```

   

3. Define las siguientes variables de entorno:

```
MY_CONFIG = {"hostname": "127.10.10.10", "port": 5010}
MY_CONNECT = {"user": "Jhon", "password": "123", "database": "db_campus_incidencias"}
MY_JWT = ""
```



1. Una vez instaladas las dependencias y configurado las variables de entorno, tienes que ejecutar el nodemon de la siguiente manera.

```
npm run dev
```



## GENERAR TOKEN ACCESO "LOGIN"

Antes de empezar a utilizar las diferentes rutas y endPoints debemos generar un token de acceso, que debemos colocar en nuestro header/Autorization, este token tiene un limite de 30h, en ese rango de tiempo podremos acceder a las rutas y endPoints de nuestra API.

para generar nuestro token, debemos acceder a nuestra extensión de visual estudio llamada **Thunder-Client**, colocar la siguiente ruta:

`GET:` **http://"hostname":"port"/login**

​	En el body irá el siguiente objeto 

```
{
	"User": 1
	"Password": "a1"
}
```

​	

**NOTA**: Hay 3 tipos de usuarios, cada uno utiliza una versión diferente

```
["admin", "trainer", "camper"]
```

```
{
	"User": 1,
	"Password": "a1" -----> administrador version "3.0.0"
}
{
	"User": 2,
	"Password": "a2" -----> trainer  version "2.1.0"
}
{
	"User": 3,
	"Password": "a3" -----> camper  version "1.0.0"
}
```

```
El token generado se mostrara en la pantalla de resultado de `Thunder-Client`
```



Una vez obtenido nuestro token debemos ingresarlo en la extensión de visual estudio `Thunder-Client` ruta "Headers", una vez dentro, en la casilla de header colocar `Authorization`, Al lado colocar Bearer y el token generado anteriormente.

- También en el Thunder colocar la versión autorizada, que se especifican arriba.
- Para colocar la versión, escribir en `Headers` Accept-Version y la version requerida



## METODOS POR VERSION  "3.0.0" -> "admin"

**GET**: {

   `http://127.10.10.10:5010/reports` - Traer todos los registros de reportes

   `http://127.10.10.10:5010/trainers` - Traer todos los registros de trainers

   `http://127.10.10.10:5010/computer_inventory` - Traer todos los registros de inventarios

}



**POST**: {

   `http://127.10.10.10:5010/reports` - Insertar datos en reportes

```
{
   "id_report": 1,
   "id_trainer": 1,
   "name_insidence": "Software",
   "name_level_insidence": "Leve",
   "description": "En buen estado",
   "id_computer":  1
}
```

   `http://127.10.10.10:5010/trainers` - Insertar datos en trainers

```
{
   "id_trainer": 1,
   "name_trainer": "Miguel",
   "email_personal_trainer": "miguel@gmail.com",
   "email_corporativo_trainer": "miguel@gmail.com",
   "mobile_phone": "+57 3002215451",
   "home_phone": 6552154,
   "business_phone": "+57 3002215451",
   "business_mobile_phone": "+57 3002215451"
}
```

   `http://127.10.10.10:5010/computer_inventory` - Insertar datos en inventarios

```
{
   "id_computer": 23,
   "name_salon": "Sputnik",
   "name_area": "Review",
   "serial_cpu": "AD2023082141AC",
   "serial_monitor": "AD2023082141AC",
   "serial_keyboard": "AD2023082141AC",
   "serial_mouse": "AD2023082141AC",
   "serial_headset": "AD2023082141AC"
}
```

}



## METODOS POR VERSION  "2.1.0" -> "trainer"

**GET**: {

   `http://127.10.10.10:5010/reports` - Traer todos los registros de reportes

   `http://127.10.10.10:5010/computer_inventory` - Traer todos los registros de inventarios

}



**POST**: {

   `http://127.10.10.10:5010/reports` - Insertar datos en reportes

```
{
   "id_report": 1,
   "id_trainer": 1,
   "name_insidence": "Software",
   "name_level_insidence": "Leve",
   "description": "En buen estado",
   "id_computer":  1
}
```

 }



## METODOS POR VERSION  "1.1.0" -> "camper"

**GET**: {

   `http://127.10.10.10:5010/computer_inventory` - Traer todos los registros de inventarios

}



## DEPENDECIAS QUE SE IMPLEMENTARON

- "dotenv": "16.3.1",
- "express": "4.18.2",
- "express-rate-limit": "6.8.1",
- "express-routes-versioning": "1.0.1",
- "express-validator": "7.0.1",
- "jose": "4.14.4",
- "mongodb": "5.7.0",
- "nodemon": "3.0.1",
- "passport": "0.6.0",
- "passport-http-bearer": "1.0.1"

**------------------------------**

# NOTA

En tal caso de presentar algún error el código, comunicarse con el desarrollador.

`EMAIL:` [Jhonhernandez.1899@gmail.com](mailto:Jhonhernandez.1899@gmail.com)