package ecommerce.electronics.app.repository;

import java.math.BigDecimal;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import ecommerce.electronics.app.entities.Address;
import ecommerce.electronics.app.entities.Order;

@SpringBootTest
public class OrderRepositoryTest {

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private UserRepository userRepository;

	@Test
	void saveOrderMethod() {
		Order order = new Order();
		order.setTotal_price(new BigDecimal(2000));
//order.setUserid(1);
		order.setUser(userRepository.findByUserid(1L).get());

		Address address = new Address();
		address.setCity("Hyderabad");
		address.setStreet("Near Childern Park");
		address.setState("Maharashtra");
		address.setCountry("India");
		address.setZipcode("243789");

		order.setAddress(address);
		orderRepository.save(order);

	}

	@Test
	void getOrderMethod() {
		Order order = orderRepository.findById(6L).get();
		System.out.println(order.toString());
	}

	@Test
	void updateOrderMethod() {
		Order order = orderRepository.findById(27L).get();
		order.getAddress().setZipcode("542897");
		orderRepository.save(order);
	}

	@Test
	void deleteOrderMethod() {
		orderRepository.deleteById(16L);
	}

}
