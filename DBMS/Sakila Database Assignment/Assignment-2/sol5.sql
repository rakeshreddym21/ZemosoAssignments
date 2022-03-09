SELECT count(rating) as rented
from film
JOIN inventory on inventory.film_id=film.film_id
JOIN rental on rental.inventory_id=inventory.inventory_id
JOIN customer on customer.customer_id=rental.customer_id and (customer.first_name='SUSAN' and customer.last_name='WILSON')
WHERE rating ='R'