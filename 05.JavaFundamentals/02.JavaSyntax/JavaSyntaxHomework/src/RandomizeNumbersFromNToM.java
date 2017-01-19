import java.util.*;

/**
 * Created by User on 23.3.2016 г..
 */
public class RandomizeNumbersFromNToM {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = console.nextInt();
        int m = console.nextInt();

        List<Integer> allNumbers = new ArrayList<>();
        for (int number = m; number <= n; number++) {
            allNumbers.add(number);
        }

        Random random = new Random();
        List<String> result = new ArrayList<>();
        while (allNumbers.size() > 0) {
            int index = random.nextInt(allNumbers.size());
            String num = allNumbers.get(index).toString();
            result.add(num);
            allNumbers.remove(index);
        }

        System.out.println(String.join(" ", result));
    }
}
