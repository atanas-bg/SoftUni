package StreamAPI;

import java.util.Arrays;

/**
 * Created by User on 14.4.2016 г..
 */
public class StreamAPI {
    public static void main(String[] args) {
        String[] names = new String[]{"Angel", "Mariika", "Nasko", "Edi"};

        Arrays.stream(names).map(name -> {
            if (name.length() < 7) {
                return name + " Momchev";
            }
            return " Momcheva";
        }).forEach(System.out::println);
    }
}