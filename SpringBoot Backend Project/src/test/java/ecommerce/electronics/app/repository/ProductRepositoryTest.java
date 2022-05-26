package ecommerce.electronics.app.repository;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.math.BigDecimal;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import ecommerce.electronics.app.entities.Category;
import ecommerce.electronics.app.entities.Product;

@SpringBootTest
public class ProductRepositoryTest {

	// test basic CRUD operations
	// It setup the environment with spring container and beans registered in it

	@Autowired
	ProductRepository productRepository;

	@Test
	public void test() {
		assertTrue(true);
	}

	@Test
	void findByIdMethod() {
		Long id = 1L;

		Product product = productRepository.findById(id).get();
	}

	@Test
	public void testCreateProduct() {
		// it insert the data into database

		Category category = new Category();

		category.setCategoryid(2);
		category.setCategory_name("GAMING");

		Product product = new Product();
		product.setProductid(2);
		product.setCategory(category);
		product.setProduct_name("Vase");
		product.setDescription("This vase made in 1990.");
		product.setProduct_image("vase.jpg");
		product.setDiscount(12);
		product.setPrice(new BigDecimal(100));

		// List<Product> products = new ArrayList<Product>();
		// products.add(category);

		productRepository.save(product);
		// create the insert query when we write the save method

	}

	//
	// @Test
	// void deleteByIdMethod() {
	// // delete record by id
	// Long id = 1L;
	// productRepository.deleteById(id);
	// }

	@Test
	void deleteMethod() {

		// find an entity by id
		Long id = 4L;
		Product product = productRepository.getById(id);

		// delete(entity)
		productRepository.delete(product);
	}

	@Test
	void deleteAllMethod() {
		// productRepository.delete();
		Product product = productRepository.findById(5L).get();
		Product product1 = productRepository.findById(6L).get();

		productRepository.deleteAll(List.of(product, product1));
	}

	@Test
	void existByIdMethod() {
		Long id = 7L;

		boolean result = productRepository.existsById(id);
		System.out.println(result);
	}

	@Test
	void countMethod() {
		long count = productRepository.count();
		System.out.println(count);
	}

//	get data from caetgory table by Id
	@Test
	void findByMethod() {
		Long id = 1L;

		Product category = productRepository.findById(id).get();
	}

// get all data from category table
	@Test
	void findAllMethod() {
//query -: select * from category;
		List<Product> category = productRepository.findAll();

		category.forEach((c) -> {
			System.out.println(c.getCategory());
			

		});
	}
}