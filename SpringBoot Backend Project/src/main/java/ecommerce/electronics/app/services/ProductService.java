package ecommerce.electronics.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import ecommerce.electronics.app.entities.Category;
import ecommerce.electronics.app.entities.Product;
import ecommerce.electronics.app.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository productRepository;
	
//
	public List<Product> getProductBasedOnPage(int pageNumber, int pageSize) {
		Pageable pageable = PageRequest.of(pageNumber, pageSize);
		Page<Product> page = productRepository.findAll(pageable);
		List<Product> product = page.getContent();
		if (product.isEmpty()) {
			int oldPageNumber = pageNumber - 1;
			pageable = PageRequest.of(oldPageNumber, pageSize);
			page = productRepository.findAll(pageable);
			product = page.getContent();
			//
		}
		return product;
	}

	public List<Product> findAllProducts() {
		List<Product> productList = productRepository.findAll();
		return productList;
	}
	
	public List<Product> getProductByCategory(long id) {
		List<Product> category = productRepository.findByCategoryCategoryid(id);
		return category;
		}


		
}

