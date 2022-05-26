package ecommerce.electronics.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ecommerce.electronics.app.entities.Review;
import ecommerce.electronics.app.repository.ReviewRepository;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository reviewRepository;

	// To list all reviews
	public List<Review> findAll() {
		return reviewRepository.findAll();
	}

	// get/ retrieve the order object along with it's shipping order
	public Review getReviews(Long reviewid) {

		Optional<Review> opt = reviewRepository.findById(reviewid);

		if (opt.isPresent()) {
			return opt.get();
		}
		return null;
	}

	// persist order object along with shipping order
	// this method will be called with POST request
	public Review addNewReview(Review review) {
		Review newReview = reviewRepository.save(review);
		return newReview;
	}
	public boolean delete(long id) {
		var removed = reviewRepository.removeIf(id);
		if(removed > 0) {
		return true;
		}
		else {
		return false;
		}
		}
}
