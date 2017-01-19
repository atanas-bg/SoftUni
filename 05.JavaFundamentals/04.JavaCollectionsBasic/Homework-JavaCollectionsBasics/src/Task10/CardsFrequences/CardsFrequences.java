package Task10.CardsFrequences;

import java.util.*;

/**
 * Created by User on 12.4.2016 г..
 */
public class CardsFrequences {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String[] inputCards = console.nextLine().split(" ");
        String[] cardsFaces = new String[inputCards.length];
        String cardWithSymbol;

        for (int index = 0; index < inputCards.length; index++) {
            cardWithSymbol = inputCards[index];
            cardsFaces[index] = cardWithSymbol.substring(0, (cardWithSymbol.length() - 1));
        }

        LinkedHashMap<String, Double> countedCards = new LinkedHashMap<>();
        double count = 0;

        for (String card : cardsFaces) {
            if (countedCards.containsKey(card)) {
                count = countedCards.get(card);
                countedCards.replace(card, count, count + (1d / cardsFaces.length));
            } else {
                countedCards.put(card, (1d / cardsFaces.length));
            }
        }

        for (Map.Entry<String, Double> keyValuePair : countedCards.entrySet()) {
            System.out.printf("%s -> %.2f%% times\n", keyValuePair.getKey(), keyValuePair.getValue() * 100);
        }
    }
}
