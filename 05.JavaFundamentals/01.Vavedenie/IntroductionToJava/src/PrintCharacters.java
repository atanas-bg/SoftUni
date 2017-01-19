import java.text.MessageFormat;

/**
 * Created by User on 19.3.2016 г..
 */
public class PrintCharacters {
    public static void main(String[] args) {
        System.out.print('a');
        for (char character = 'b'; character <= 'z'; character++) {
            String output = MessageFormat.format(" {0}", character);
            System.out.print(output);
        }
    }
}
