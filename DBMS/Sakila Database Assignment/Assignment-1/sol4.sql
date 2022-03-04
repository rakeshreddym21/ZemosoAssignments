SELECT customer.first_name,customer.last_name
FROM customer
JOIN address on address.address_id=customer.address_id
JOIN city on address.city_id=city.city_id
JOIN country on city.country_id=country.country_id and country.country_id='Canada'
JOIN rental on rental.customer_id=customer.customer_id
JOIN inventory on inventory.inventory_id=rental.inventory_id
JOIN film on film.film_id=inventory.film_id
JOIN film_actor on film.film_id=film_actor.film_id
JOIN actor on actor.actor_id=film_actor.actor_id 
WHERE actor.last_name='WAHLBERG'
