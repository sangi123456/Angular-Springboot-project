package ecommerce.electronics.app.entities;

import java.math.BigDecimal;
import java.time.LocalDateTime;
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
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

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



@Table(name = "orders")
///@Entity(name="orders")
public class Order
{
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long order_id;

private BigDecimal total_price;

@CreationTimestamp
private LocalDateTime date_created;

@UpdateTimestamp
private LocalDateTime date_updated;

//private int userid;
//private int order_address_id;


@OneToOne(cascade = CascadeType.ALL)
@JoinColumn(name="order_address_id",referencedColumnName = "order_address_id")
private Address address;


@ManyToOne
@JoinColumn(name = "userid",referencedColumnName = "userid")
//@JsonIgnore
private User user;




//mappedBy means FK is managed by other side of relationship
@OneToMany(mappedBy = "order",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
private List<OrderItem> items= new ArrayList<OrderItem>();






}