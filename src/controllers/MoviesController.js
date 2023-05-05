const knex = require('../database/knex')

class MoviesController{
  async create(request, response){
   const { title, description, tags, grade } = request.body
   const { user_id } = request.params;

   const [movie_id] = await knex("movies").insert({
    title,
    description,
    grade,
    user_id
   })

   const tagsInsert = tags.map(name => {
    return {
      movie_id,
      name,
      user_id
    }
   })

   await knex("tags").insert(tagsInsert)

   response.json()
  }

  async show(request, response){
    const { id } = request.params

    const movie = await knex("movies").where({ id }).first()
    const tags = await knex("tags").where({ movie_id: id }).orderBy("name");

    return response.json({
      ...movie,
      tags
    })
  }
}

module.exports = MoviesController;