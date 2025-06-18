import java.util.Arrays;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public String toString() {
        return productId + " - " + productName + " (" + category + ")";
    }
}

public class ECommerceSearch {

  
    public static Product linearSearch(Product[] products, int id) {
        for (Product p : products) {
            if (p.productId == id) {
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int id) {
        int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (products[mid].productId == id) return products[mid];
            else if (products[mid].productId < id) low = mid + 1;
            else high = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(105, "Phone", "Electronics"),
            new Product(101, "Laptop", "Electronics"),
            new Product(110, "Shoes", "Fashion"),
            new Product(103, "Book", "Education"),
            new Product(108, "Watch", "Accessories")
        };


        System.out.println("Linear Search:");
        Product result1 = linearSearch(products, 103);
        System.out.println(result1 != null ? "Found: " + result1 : "Product not found");

        Arrays.sort(products, (a, b) -> a.productId - b.productId);


        System.out.println("\nBinary Search:");
        Product result2 = binarySearch(products, 103);
        System.out.println(result2 != null ? "Found: " + result2 : "Product not found");
    }
}
