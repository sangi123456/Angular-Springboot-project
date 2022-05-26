package ecommerce.electronics.app.entities;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "products")
@Getter
@Setter
@AllArgsConstructor
@ToString
@NoArgsConstructor

public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long productid;
	private String product_name;
	private BigDecimal price;
	private int discount;
	private String product_image;
	private String description;

	@ManyToOne
	@JoinColumn(name = "categoryid", referencedColumnName = "categoryid")
	 //@JsonIgnore
	private Category category;

//	//undirectinal mapping
	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JsonIgnore
	private List<Review> reviews = new ArrayList<Review>();

}
