SELECT title,count(title) as rented
FROM film
JOIN film_category ON film_category.film_id= film.film_id
JOIN category ON category.category_id=film_category.category_id and category.name='Horror'
JOIN inventory ON inventory.film_id=film.film_id
JOIN rental ON rental.inventory_id=inventory.inventory_id
GROUP BY title
ORDER BY rented DESC
LIMIT 3