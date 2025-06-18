import java.util.Scanner;

public class FinancialForecast {

  
    public static double calculateForecast(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;  
        }

        return calculateForecast(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

      
        System.out.print("Enter the current value (e.g., investment amount): ");
        double currentValue = input.nextDouble();

        System.out.print("Enter annual growth rate (as a percentage): ");
        double ratePercent = input.nextDouble();
        double growthRate = ratePercent / 100; 

        System.out.print("Enter number of years to forecast: ");
        int years = input.nextInt();

    
        double futureValue = calculateForecast(currentValue, growthRate, years);

   
        System.out.printf("The forecasted value after %d years is: %.2f\n", years, futureValue);

        input.close();
    }
}
