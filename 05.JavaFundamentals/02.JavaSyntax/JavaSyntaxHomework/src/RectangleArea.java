import java.util.Scanner;

/**
 * Created by User on 21.3.2016 г..
 */
public class RectangleArea {
    public static void main(String[] args) {
    Scanner console = new Scanner(System.in);
        int a = console.nextInt();
        int b = console.nextInt();
        int rectangleArea = a * b;
        System.out.println(rectangleArea);
    }
}
