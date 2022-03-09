SELECT title
FROM film
JOIN film_category ON film_category.film_id= film.film_id
JOIN category ON category.category_id=film_category.category_id and category.name='Sci-Fi'
JOIN inventory on inventory.film_id=film.film_id
JOIN rental on rental.inventory_id=inventory.inventory_id
JOIN staff on staff.staff_id=rental.staff_id and (staff.first_name='Jon' and   staff.last_name='Stephens')
GROUP BY film.title