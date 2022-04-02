package tfg.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tfg.project.model.Book;
import tfg.project.model.Bookstore;
import tfg.project.service.RuleService;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

//link al servicio que se encuentra en /rules
@RestController
@RequestMapping("rules")
public class RuleController {
    private static final String BOOKSTORE_XML = "bookstore-jaxb.xml";
    private final RuleService rules;

    //Instancias
    @Autowired
    public RuleController(RuleService rules) {
        this.rules = rules;
    }


    //método GET al recuperar una película
    //link al servicio en films/{id}, produces lo que devuelve
    @GetMapping(
            produces = MediaType.APPLICATION_XML_VALUE
    )
    //cogemos la variable id del path y la identificamos con el id
    ResponseEntity<Bookstore> get() {
        List < Book > bookList = new ArrayList < Book > ();

        // create books
        Book book1 = new Book();
        book1.setIsbn("978-0134685991");
        book1.setName("Effective Java");
        book1.setAuthor("Joshua Bloch");
        book1.setPublisher("Amazon");
        bookList.add(book1);

        Book book2 = new Book();
        book2.setIsbn("978-0596009205");
        book2.setName("Head First Java, 2nd Edition");
        book2.setAuthor("Kathy Sierra");
        book2.setPublisher("amazon");
        bookList.add(book2);

        // create bookstore, assigning book
        Bookstore bookstore = new Bookstore();
        bookstore.setName("Amazon Bookstore");
        bookstore.setLocation("Newyorkt");
        bookstore.setBookList(bookList);

        ;

        //recuperamos la película obtenida
        return ResponseEntity.of(Optional.ofNullable(convertXMLToObject()));
    }

    private static Bookstore convertXMLToObject() {
        try {
            JAXBContext context = JAXBContext.newInstance(Bookstore.class);
            Unmarshaller un = context.createUnmarshaller();
            Bookstore bookstore = (Bookstore) un.unmarshal(new File(BOOKSTORE_XML));
            List <Book> list = bookstore.getBooksList();
            for (Book book: list) {
                System.out.println("Book: " + book.getName() + " from " + book.getAuthor());
            }
        } catch (JAXBException e) {
            e.printStackTrace();
        }
        return null;
    }
}
