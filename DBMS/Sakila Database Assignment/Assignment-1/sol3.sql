SELECT  customer.first_name,customer.last_name
FROM customer
JOIN address on address.address_id=customer.address_id
JOIN city on address.city_id=city.city_id
JOIN country on city.country_id=country.country_id 
JOIN rental on rental.customer_id=customer.customer_id
JOIN inventory on inventory.inventory_id=rental.inventory_id
JOIN film on film.film_id=inventory.film_id
JOIN film_category ON film_category.film_id= film.film_id
JOIN category ON category.category_id=film_category.category_id 
WHERE country.country='India' and category.name='Sports'
GROUP BY customer.customer_id

