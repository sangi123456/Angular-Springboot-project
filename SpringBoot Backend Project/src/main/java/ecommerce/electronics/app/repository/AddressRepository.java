package ecommerce.electronics.app.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ecommerce.electronics.app.entities.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long>
{



}

