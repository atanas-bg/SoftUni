package Task01.Royalism;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 * Created by User on 8.5.2016 г..
 */
public class Royalism {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String[] inputNames = console.nextLine().split("\\s+");
        int positionOfR = 18;
        int sumOfChars = 0;
        String personName;
        int royalistsCounter = 0;
        List<String> royalistsNames = new ArrayList<>();
        List<String> nonRoyalistsNames = new ArrayList<>();

        for (int index = 0; index < inputNames.length; index++) {
            sumOfChars = 0;
            for (int i = 0; i < inputNames[index].length(); i++) {
                personName = inputNames[index];
                sumOfChars += personName.charAt(i);
                while(sumOfChars > 26){
                    sumOfChars -= 26;
                }
            }

            if (sumOfChars == positionOfR ){
                royalistsCounter += 1;
                royalistsNames.add(inputNames[index]);
            } else {
                nonRoyalistsNames.add(inputNames[index]);
            }
        }

        int nonRoyalistsCounter = inputNames.length - royalistsCounter;
        if(royalistsCounter >= nonRoyalistsCounter){
            System.out.println("Royalists - " + royalistsCounter);
            for (int index = 0; index < royalistsNames.size(); index++) {
                System.out.println(royalistsNames.get(index));
            }
            System.out.println("All hail Royal!");
        } else {
            for (int index = 0; index < nonRoyalistsNames.size(); index++) {
                System.out.println(nonRoyalistsNames.get(index));
            }
            System.out.println("Royalism, Declined!");
        }


    }
}
