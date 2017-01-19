package Task01.FilterArray;

import com.sun.corba.se.spi.ior.IdentifiableFactory;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class FilterArray {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String[] inputStrings = console.nextLine().split("[^\\w]+");
        List<String> result = Arrays.stream(inputStrings).filter(isBiggerThanThree()).collect(Collectors.toList());

        String output = String.join(" ", result);

        if (output.length() > 0){
            System.out.println(output);
        } else{
            System.out.println("(empty)");
        }
    }

    private static Predicate<String> isBiggerThanThree() {
        return element -> element.length() > 3;
    }
}