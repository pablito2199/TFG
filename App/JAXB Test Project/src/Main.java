import java.io.File;
import java.io.IOException;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

public class Main {

    private static final String DOCUMENT = "norma.xml";

    public static void main(String[] args) throws JAXBException, IOException {
        convertXMLToObject();
    }

    private static Documento convertXMLToObject() {
        try {
            JAXBContext context = JAXBContext.newInstance(Documento.class);
            Unmarshaller un = context.createUnmarshaller();
            Documento document = (Documento) un.unmarshal(new File(DOCUMENT));
            System.out.println(document.getCabecera());
        } catch (JAXBException e) {
            e.printStackTrace();
        }
        return null;
    }
}
