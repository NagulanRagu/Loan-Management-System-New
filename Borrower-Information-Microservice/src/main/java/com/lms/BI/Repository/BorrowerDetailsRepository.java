package com.lms.BI.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lms.BI.Model.BorrowerDetails;

public interface BorrowerDetailsRepository extends JpaRepository<BorrowerDetails, Long> {
    
    BorrowerDetails findById(long id);  
    
    BorrowerDetails findByUname(String uname);
}
