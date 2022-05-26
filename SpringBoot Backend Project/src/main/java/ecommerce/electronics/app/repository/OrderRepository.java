package ecommerce.electronics.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ecommerce.electronics.app.entities.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

}
