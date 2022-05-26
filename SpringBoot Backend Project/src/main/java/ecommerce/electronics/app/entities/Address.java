package ecommerce.electronics.app.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity(name = "order_address")
public class Address {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long order_address_id;
	private String street;
	private String city;
	private String state;
	private String country;
	private String zipcode; 
	// @OneToOne(cascade = CascadeType.ALL)
//@JoinColumn(name = "order_id", referencedColumnName = "order_id")
//Order order;
}
