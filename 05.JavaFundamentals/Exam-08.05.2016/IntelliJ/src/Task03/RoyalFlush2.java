package Task03;

import java.util.HashMap;
import java.util.Scanner;

/**
 * Created by User on 9.5.2016 г..
 */
public class RoyalFlush2 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int numLines = Integer.parseInt(console.nextLine());
        String inputLine;
        StringBuilder allInput = new StringBuilder();
        for (int line = 0; line < numLines; line++) {
            inputLine = console.nextLine();
            allInput.append(inputLine);
        }

        HashMap<Character, String> cardSuites = new HashMap<>();
        cardSuites.put('s', "Spades");
        cardSuites.put('c', "Clubs");
        cardSuites.put('d', "Diamonds");
        cardSuites.put('h', "Hearts");

        Character cardSymbol;
        Character cardSuit;
        Character combinationSuit = null;

        String str = allInput.toString().replaceAll("0", "");
        allInput.setLength(0);
        allInput.append(str);

        int position = 0;
        int royalFlushCounter = 0;

        boolean combinationFound = true;
        boolean tenFound = false;
        boolean jFound = false;
        boolean qFound = false;
        boolean kFound = false;
        boolean combinationSuitFound = false;

        while (combinationFound && allInput.length() >= 10) {
            combinationFound = false;
            for (int index = 0; index < allInput.length(); index++) {
                cardSymbol = allInput.charAt(index);
                index = index + 1;
                cardSuit = allInput.charAt(index);

                if (!combinationSuitFound) {
                    if (cardSymbol.equals('1')) {
                        position = index;
                        combinationSuit = allInput.charAt(index);
                        tenFound = true;
                        combinationSuitFound = true;
                        continue;
                    }
                }

                if (tenFound) {
                    if (!cardSymbol.equals('J') && cardSuit.equals(combinationSuit)) {
                        allInput = allInput.delete(position - 1, position + 1);
                        index = -1;
                        combinationSuitFound = false;
                        tenFound = false;
                    } else if (cardSymbol.equals('J') && cardSuit.equals(combinationSuit)) {
                        jFound = true;
                        tenFound = false;
                    }
                    continue;
                }

                if (jFound) {
                    if (!cardSymbol.equals('Q') && cardSuit.equals(combinationSuit)) {
                        allInput = allInput.delete(position - 1, position + 1);
                        index = -1;
                        combinationSuitFound = false;
                        jFound = false;
                    } else if (cardSymbol.equals('Q') && cardSuit.equals(combinationSuit)) {
                        qFound = true;
                        jFound = false;
                    }
                    continue;
                }

                if (qFound) {
                    if (!cardSymbol.equals('K') && cardSuit.equals(combinationSuit)) {
                        allInput = allInput.delete(position - 1, position + 1);
                        index = -1;
                        combinationSuitFound = false;
                        qFound = false;
                    } else if (cardSymbol.equals('K') && cardSuit.equals(combinationSuit)) {
                        kFound = true;
                        qFound = false;
                    }
                    continue;
                }

                if (kFound) {
                    if (!cardSymbol.equals('A') && cardSuit.equals(combinationSuit)) {
                        allInput = allInput.delete(position - 1, position + 1);
                        index = -1;
                        combinationSuitFound = false;
                        kFound = false;
                    } else if (cardSymbol.equals('A') && cardSuit.equals(combinationSuit)) {
                        combinationFound = true;
                        combinationSuitFound = false;
                        kFound = false;
                        royalFlushCounter += 1;
                        System.out.printf("Royal Flush Found - %s", cardSuites.get(combinationSuit));
                        System.out.println();
                        allInput = allInput.delete(position - 1, position + 1);
                        index = allInput.length();
                    }
                    continue;
                }
            }
        }
        System.out.printf("Royal's Royal Flushes - %d.", royalFlushCounter);
    }
}
