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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ecommerce.electronics.app.entities.Category;
import ecommerce.electronics.app.entities.Product;
import ecommerce.electronics.app.repository.ProductRepository;
import ecommerce.electronics.app.services.ProductService;

@RestController
@RequestMapping("/api/v1")
public class ProductController {

	@Autowired
	ProductRepository productRepository;

	private ProductService productService;

	public ProductController(@Autowired ProductService service) {
		this.productService = service;
	}

	// this URL will read data from query parameters
	// query param are appended at the end of URL after
	// http://localhost:8080/page/products?pgnum=0&size=2
	@GetMapping(value = "/page/products", produces = "application/json")
	public List<Product> getProductsOnPage(@RequestParam("pgnum") int pageNumber, @RequestParam("size") int pageSize) {
		List<Product> product = this.productService.getProductBasedOnPage(pageNumber, pageSize);
		return product;
	}

	@GetMapping("/products")
	public ResponseEntity<List<Product>> findAllProducts() {
		List<Product> product = productService.findAllProducts();
		return new ResponseEntity<List<Product>>(product, HttpStatus.OK);
	}

//	 @GetMapping("/search-title")
//	 public ResponseEntity<List<Product>> getBooksByTitleLikeIgnoreCase(@RequestParam String title) {
//	 return new ResponseEntity<List<Book>>(ProductRepository.findByTitleContaining("%"+title+"%"), HttpStatus.OK);
//	 }
//	
	// search data
	@GetMapping("/search")
	public ResponseEntity<List<Product>> getBooksByTitleLikeIgnoreCase(@RequestParam("key") String key) {
		return new ResponseEntity<List<Product>>(productRepository.findAllProductByName("%" + key + "%"),
				HttpStatus.OK);
	}
	
	@GetMapping("/category/{id}")
	public ResponseEntity<List<Product>> getProductByCategory(@PathVariable("id") Long id) {

	return new ResponseEntity<List<Product>>(productService.getProductByCategory(id), HttpStatus.OK);
	}
	
	
}
