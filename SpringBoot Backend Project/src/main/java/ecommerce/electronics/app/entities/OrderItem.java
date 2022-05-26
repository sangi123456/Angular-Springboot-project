package ecommerce.electronics.app.entities;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
//@Entity(name = "orderitem")



@Table(name="order_items")
public class OrderItem
{
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long order_item_id;

private BigDecimal price;
private int quantity;



@ManyToOne
@JoinColumn(name = "productid", referencedColumnName = "productid")
private Product product;

//private int order_id;

@ManyToOne
@JoinColumn(name = "order_id", referencedColumnName = "order_id")
@JsonIgnore
private Order order;


}