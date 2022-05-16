package tfg.project.utilities;

import tfg.project.model.Documento;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import java.io.*;

public class AuxMethods {
    public static Documento convertXMLToObject(String nombreFichero) {
        try {
            JAXBContext context = JAXBContext.newInstance(Documento.class);
            Unmarshaller un = context.createUnmarshaller();
            RandomAccessFile f = new RandomAccessFile(new File(nombreFichero), "rw");
            f.seek(0);
            String newString = "<cdg>                                                                                                                                     ";
            f.write(newString.getBytes());
            f.close();
            return (Documento) un.unmarshal(new File(nombreFichero));
        } catch (JAXBException | IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}