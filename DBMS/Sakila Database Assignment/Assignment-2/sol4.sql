SELECT category.name,count(category.name) as rented
FROM rental
JOIN customer on customer.customer_id=rental.customer_id and customer.first_name='PATRICIA'
JOIN inventory ON inventory.inventory_id=rental.inventory_id
JOIN film on film.film_id=inventory.inventory_id
JOIN film_category ON film_category.film_id= film.film_id
JOIN category ON category.category_id=film_category.category_id 
GROUP BY category.name
ORDER BY rented DESC
LIMIT 3