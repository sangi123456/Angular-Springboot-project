package ecommerce.electronics.app.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "review")
@Getter
@Setter
@AllArgsConstructor
@ToString
@NoArgsConstructor

public class Review {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long reviewid;
	private int rating;
	private String reviewtext;

	@ManyToOne
	@JoinColumn(name = "productid", referencedColumnName = "productid")
	//@JsonIgnore
	private Product product;

	@ManyToOne
	@JoinColumn(name = "userid", referencedColumnName = "userid")
	 //@JsonIgnore
	private User user;

}
