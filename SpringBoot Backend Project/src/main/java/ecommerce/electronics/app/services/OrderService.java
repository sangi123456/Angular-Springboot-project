package ecommerce.electronics.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ecommerce.electronics.app.entities.Address;
import ecommerce.electronics.app.entities.Order;
import ecommerce.electronics.app.entities.OrderItem;
import ecommerce.electronics.app.repository.OrderRepository;

@Service
public class OrderService
{
@Autowired
OrderRepository orderRepository;

//retrives a order object along with shipping order
public Order retrieveOrderDetails(long orderid)
{
Optional<Order> optional= orderRepository.findById(orderid);
if(optional.isPresent())
{
return optional.get();
}
return null;
}

public List<Order> listorders() {

return orderRepository.findAll();
}

//persist order object along with shipping order
//this method will be called with a POST request
// public Order newOrder(Order order)
// {
// Order newOrder= orderRepository.save(order);
// return newOrder;
// }

public Order newOrder(Order order) {



Address address = order.getAddress();
// address.setOrder(order);


List<OrderItem> items = order.getItems();
for (OrderItem orderItem : items)
{
orderItem.setOrder(order);
}



order.setAddress(address);
Order newOrder = orderRepository.save(order);
return newOrder;
}




}