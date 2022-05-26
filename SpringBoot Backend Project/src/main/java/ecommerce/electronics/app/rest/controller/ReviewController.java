package ecommerce.electronics.app.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ecommerce.electronics.app.entities.Review;
import ecommerce.electronics.app.services.ReviewService;

@RestController
@RequestMapping("/api/v3")
public class ReviewController {

	@Autowired
	ReviewService reviewService;

	// to fetch all reviews from database
	@GetMapping("/reviews/{id}")
	public ResponseEntity<Review> getOrderById(@PathVariable("id") long id) {

		Review review = reviewService.getReviews(id);
		if (review != null) {
			return new ResponseEntity<Review>(review, HttpStatus.OK);
		} else
			// throw new ResponseNotFoundException("Order id is not found");
			return new ResponseEntity<Review>(HttpStatus.NO_CONTENT); // NO_CONTENT - Http Status code 204
	}

	@PostMapping("/reviews/add")
	public ResponseEntity<Review> addNewReview(@RequestBody Review review) {
		Review savedReview = reviewService.addNewReview(review);
		return new ResponseEntity<Review>(savedReview, HttpStatus.CREATED);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Review> deleteReviewById(@PathVariable("id") long id) {
		// reviewService.deleteReview(id);
		boolean complete = reviewService.delete(id);
		if (complete) {
			return new ResponseEntity<Review>(HttpStatus.OK);
		} else {
			return new ResponseEntity<Review>(HttpStatus.NOT_FOUND);
		}
	}
	

}
