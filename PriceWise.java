
import java.util.Scanner;

public class PriceWise {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("================================");
        System.out.println("       WELCOME TO PRICEWISE");
        System.out.println("     SMART PRICE COMPARISON");
        System.out.println("================================");

        System.out.print("Enter Product Name: ");
        String product = sc.nextLine();

        System.out.print("Enter Amazon Price: ");
        double amazon = sc.nextDouble();

        System.out.print("Enter Flipkart Price: ");
        double flipkart = sc.nextDouble();

        System.out.print("Enter Myntra Price: ");
        double myntra = sc.nextDouble();

        System.out.println("\n----- PRICE COMPARISON -----");
        System.out.println("Product: " + product);
        System.out.println("Amazon: Rs. " + amazon);
        System.out.println("Flipkart: Rs. " + flipkart);
        System.out.println("Myntra: Rs. " + myntra);

        double lowest = Math.min(amazon,
                        Math.min(flipkart, myntra));

        System.out.println("\nBest Price: Rs. " + lowest);
        System.out.println("You can choose the store offering this price!");

        sc.close();
    }
}

