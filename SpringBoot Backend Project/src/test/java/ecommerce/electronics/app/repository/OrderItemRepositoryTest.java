package ecommerce.electronics.app.repository;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import ecommerce.electronics.app.entities.Address;
import ecommerce.electronics.app.entities.Order;
import ecommerce.electronics.app.entities.OrderItem;

@SpringBootTest
public class OrderItemRepositoryTest
{
@Autowired
private OrderRepository orderRepository;

@Autowired
private AddressRepository addressRepository;

@Autowired
private ProductRepository productRepository;

@Autowired
private UserRepository userRepository;

@Test
public void addorderOrderItem()
{
Order order=new Order();



//order.setUserid(2);
order.setTotal_price(new BigDecimal(1400));
order.setUser(userRepository.findByUserid(1L).get());



// create order item 1
OrderItem orderItem1 = new OrderItem();
// orderItem1.setOrder_item_id(3);
orderItem1.setQuantity(2);
orderItem1.setProduct(productRepository.findById(2L).get());
orderItem1.setPrice(new BigDecimal(1500));
orderItem1.setOrder(order);



// create order item 2
OrderItem orderItem2 = new OrderItem();
// orderItem2.setOrder_item_id(4);
orderItem2.setQuantity(3);
orderItem2.setProduct(productRepository.findById(4L).get());
orderItem2.setPrice(new BigDecimal(1600));
orderItem2.setOrder(order);

//order.add(orderItem1);
// order.add(orderItem2);

//set item using order object
List<OrderItem> list = new ArrayList<OrderItem>();

list.add(orderItem1);
list.add(orderItem2);
Address shipppingAddress = new Address();
shipppingAddress.setCity("Omerga");
shipppingAddress.setStreet("HanuMan Chowk");
shipppingAddress.setState("Maharashtra");
shipppingAddress.setCountry("India");
shipppingAddress.setZipcode("413606");



//set address of order object
order.setAddress(shipppingAddress);

// order.setItems();
order.setItems(list);
orderRepository.save(order);



}



}
