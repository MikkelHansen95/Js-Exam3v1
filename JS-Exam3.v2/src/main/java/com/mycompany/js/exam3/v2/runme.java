/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.js.exam3.v2;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author Mikkel Lindstrøm <Mikkel.Lindstrøm>
 */
public class runme {
    
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("com.mycompany_JS-Exam3.v2_jar_1.0-SNAPSHOTPU");
        EntityManager em = emf.createEntityManager();
        
        Persistence.generateSchema("com.mycompany_JS-Exam3.v2_jar_1.0-SNAPSHOTPU", null);
        
        
    }
    
    
}
