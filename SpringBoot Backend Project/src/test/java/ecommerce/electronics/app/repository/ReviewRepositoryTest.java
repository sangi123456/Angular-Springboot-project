package ecommerce.electronics.app.repository;

import java.math.BigDecimal;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import ecommerce.electronics.app.entities.Product;
import ecommerce.electronics.app.entities.Review;
import ecommerce.electronics.app.entities.User;

@SpringBootTest
public class ReviewRepositoryTest {

	@Autowired

	ReviewRepository reviewRepository;
	@Autowired
	UserRepository userRepository;

	@Test
	void findByIdMethod() {
		Long id = 3L;

		Review review = reviewRepository.findById(id).get();
	}

	@Test
	public void testCreateReview() {
		// it insert the data into database
		Product product = new Product();
		product.setProductid(1);
		

		User user = new User();
		//user.setUserid(1);
	

		Review review = new Review();
		review.setReviewid(3);
		review.setRating(5);
		review.setReviewtext("This is good product from electronics.");
		review.setProduct(product);
		//review.setUser(user);
		review.setUser(userRepository.findByUserid(2L).get());
		

		// List<Product> products = new ArrayList<Product>();
		// products.add(category);

		reviewRepository.save(review);
		// create the insert query when we write the save method

	}

	// update rating method
	@Test
	void updateRatingMethod() {
		Review review = reviewRepository.findById(3L).get();
		review.setRating(6);
		review.setReviewtext("Unhappy with service");
		reviewRepository.save(review);
	}

	// delete review by Id
	@Test
	void deleteReviewMethod() {
		reviewRepository.deleteById(3L);
	}

//	@Test
//	void findAllMethod() {
//		// query -: select * from product;
//		List<Product> product = reviewRepository.findAll();
//
//		product.forEach((p) -> {
//			System.out.println(p.getReviews());
//			System.out.println(p.getProductid());
//		});
//	}
}
