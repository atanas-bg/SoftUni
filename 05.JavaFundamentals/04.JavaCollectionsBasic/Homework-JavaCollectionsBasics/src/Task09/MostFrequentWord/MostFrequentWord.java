package Task09.MostFrequentWord;

import java.util.*;

/**
 * Created by User on 12.4.2016 г..
 */
public class MostFrequentWord {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String[] inputWords = console.nextLine().toLowerCase().split("[^\\w]+");
        TreeMap<String, Integer> countedWords = new TreeMap<>();
        int count;

        for (String word : inputWords) {
            if (countedWords.containsKey(word)) {
                count = countedWords.get(word);
                countedWords.replace(word, count, count + 1);
            } else {
                countedWords.put(word, 1);
            }
        }
        int maxValue = Collections.max(countedWords.values());

        for (Map.Entry<String, Integer> keyValuePair : countedWords.entrySet()) {
            if (keyValuePair.getValue() == maxValue) {
                System.out.printf("%s -> %d times\n", keyValuePair.getKey(), keyValuePair.getValue());
            }
        }
    }
}
