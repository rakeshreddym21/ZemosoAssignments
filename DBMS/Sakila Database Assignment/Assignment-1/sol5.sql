SELECT count(title) as'no. of movies' 
FROM film
JOIN film_actor on film.film_id=film_actor.film_id
JOIN actor on actor.actor_id=film_actor.actor_id
WHERE actor.first_name='SEAN' and actor.last_name='WILLIAMS'
