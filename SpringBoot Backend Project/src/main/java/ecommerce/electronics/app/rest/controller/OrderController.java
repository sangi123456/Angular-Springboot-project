package ecommerce.electronics.app.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ecommerce.electronics.app.entities.Order;
import ecommerce.electronics.app.services.OrderService;

@RestController
@RequestMapping("/api/v1")
public class OrderController {
	private OrderService orderService;

	public OrderController(@Autowired OrderService service) {
		this.orderService = service;
	}

//POST - http://localhost:8080/api/v1/orders
	@PostMapping("/orderhistory")
	public ResponseEntity<Order> addNewOrder(@RequestBody Order order) {
		Order saveOrder = orderService.newOrder(order);
		return new ResponseEntity<Order>(saveOrder, HttpStatus.CREATED);// status code:201

	}

	@GetMapping("/orders")
	public ResponseEntity<List<Order>> getOrder() {
		List<Order> orders = orderService.listorders();
		return new ResponseEntity<>(orders, HttpStatus.OK);
	}

//GET - http://localhost:8080/api/v1/orders/id/
	@GetMapping("orders/id/{id}")
	public ResponseEntity<Order> getOrderById(@PathVariable("id") long id) {
		Order order = orderService.retrieveOrderDetails(id);
		if (order != null) {
			return new ResponseEntity<Order>(order, HttpStatus.OK);
		} else
// throw new ResourceNotFoundException("Given order is not present");
			return new ResponseEntity<Order>(HttpStatus.NO_CONTENT);// status code:204
	}

	@GetMapping("/status")
	public String getStatus() {
		return "Status: OK";
	}

}