Select SUM(payment.amount) as total_sales
From film
JOIN film_category ON film_category.film_id= film.film_id
JOIN category ON category.category_id=film_category.category_id  and category.name='Animation'
Join inventory ON inventory.film_id=film.film_id
Join rental on rental.inventory_id=inventory.inventory_id
JOIN payment on payment.rental_id=rental.rental_id