package ecommerce.electronics.app.repository;



import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ecommerce.electronics.app.entities.Product;
import ecommerce.electronics.app.entities.Review;


@Repository
public interface ReviewRepository  extends JpaRepository<Review, Long>{

//	Review id = findbyReviewId(Long id);

//	Review findByReviewId(Long reviewid);
	
//	Optional<Review> findByProductid(long reviewid);
	
	@Transactional
	@Modifying
	@Query("DELETE FROM review WHERE reviewid = ?1")
	int removeIf(@Param("id") long id);
}
