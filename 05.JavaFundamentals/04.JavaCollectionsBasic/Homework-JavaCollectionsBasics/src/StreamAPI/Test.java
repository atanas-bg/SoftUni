package StreamAPI;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Created by User on 19.4.2016 г..
 */
public class Test {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();

        names.stream()
                .filter(n -> n.length() > 8)
                .forEach(System.out::println);
        Optional<String> first = names.stream().findFirst();

        System.out.println(first.get());
    }
}
