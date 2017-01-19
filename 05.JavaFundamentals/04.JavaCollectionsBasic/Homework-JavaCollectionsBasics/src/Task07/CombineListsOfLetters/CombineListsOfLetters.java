package Task07.CombineListsOfLetters;

import java.util.*;

/**
 * Created by User on 12.4.2016 г..
 */
public class CombineListsOfLetters {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        char[] charArray1 = console.nextLine().toCharArray();
        List<Character> list1 = new ArrayList<>();

        for (int index = 0; index < charArray1.length; index++) {
            list1.add(charArray1[index]);
        }

        char[] charArray2 = console.nextLine().toCharArray();
        List<Character> list2 = new ArrayList<>();

        for (int index = 0; index < charArray2.length; index++) {
            list2.add(charArray2[index]);
        }
        //Easiest solution ->
        //list2.removeAll(list1);
        //list1.addAll(list2);

        Boolean uniqueLetter = true;
        List<Character> listToBeAdded = new ArrayList<>();
        for (int index = 0; index < list2.size(); index++) {
            for (int i = 0; i < list1.size(); i++) {
                if (list1.get(i).equals(list2.get(index))) {
                    uniqueLetter = false;
                }
            }

            if (uniqueLetter) {
                listToBeAdded.add(list2.get(index));
            } else {
                uniqueLetter = true;
            }
        }

        list1.addAll(listToBeAdded);

        for (int index = 0; index < list1.size(); index++) {
            System.out.print(list1.get(index));
        }
    }
}
