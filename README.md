# week4_day3

> Express | Dynamic views, layout, partials
>
> Mongoose | Schemas, Models & Documents

## Main points: dynamic templating

- El método .render() recibe dos parámetros:

  * Nombre del archivo hbs sin extensión
  * Objeto con datos (opcional)

- Los archivos de HBS interpolan propiedades con dos llaves (solo mostrar) o tres (renderizar)


## Main points: layout

- El layout debe tener el nombre _layout.hbs_

- Debe contener la información dinámica en **{{{body}}}**


## Main points: partials

- Para usar partials es necesario:
  * Registrarse a través de hbs.registerPartials()
  * Incluirse en el directorio views/partials
  * Crearse como archivos HBS sin guiones medios en su nombre

- Un partial puede ser incluido en un hbs mediante al sintaxis {{> nombreDelPartial}}

- Puede recibir datos tras el nombre: {{> nombreDelPartial this}}


## Main points: Mongoose

- Para gestionar una BBDD mediante mongoose es necesario:
  * Requerir Mongoose
  * Conectarse a la BBDD mediante el método .connect() - que retorna una promesa
  * Crear un modelo mediante el méoto .model('nombre del modelo', {esquema del modelo})
  * Utilizarlo con los métodos CRUD de Mongoose (todos retornan una promesa):
    * .create()
    * .insertMany()
    * .find()
    * .findOne()
    * .findById()
    * .updateOne()
    * .updateMany()
    * .findByIdAndUpdate()
    * .deleteOne()
    * .deleteMany()
    * .findByIdAndRemove()
    * .countDocuments()
    

## Main points: chainable promises

- Las promesas permiten gestionar procesos asíncronos dependientes y secuenciales, donde un proceso no debe comenzar antes de que el anterior haya concluído.

- Pueden encadenarse tantos .then() como se deseen.

- Cuando uno de los .then() no puede cumplirse, salta automáticamente al próximo .catch()

- Los métodos .then() reciben como argumento una función callback, cuyo retorno es recibido como el parámetro del siguiente .then()

## Apuntes finales

Arrancar Nodemon con **nodemon -e js,hbs,css app.js** (de lo contrario omite partials)
