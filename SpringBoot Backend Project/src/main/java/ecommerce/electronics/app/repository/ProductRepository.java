package ecommerce.electronics.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import ecommerce.electronics.app.entities.Category;
import ecommerce.electronics.app.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

	// custom queries will be added
	// query by JPA : select * from Product where name = ?1(positional parameter);
	// public Product findByProduct_name(String Product_name);

	Optional<Product> findByProductid(long productid);

	@Query("SELECT p FROM products p WHERE p.product_name LIKE %?1%" + " OR p.description LIKE %?1%")
	public List<Product> findAllProductByName(String keyword);

	List<Product> findByCategoryCategoryid(long id);

}
