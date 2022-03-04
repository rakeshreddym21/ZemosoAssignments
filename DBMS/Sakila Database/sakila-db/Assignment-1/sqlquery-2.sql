SELECT film.title,category.name,rental_duration*rental_rate as rented
FROM film
JOIN film_category ON film_category.film_id= film.film_id
JOIN category ON category.category_id=film_category.category_id
WHERE category.name='Horror'
ORDER BY rented DESC
LIMIT 3;