class Log {
    private static Log instance;

    private Log() {
        System.out.println("Log Initialized");
    }

    public static Log getInstance() {
        if (instance == null) {
            instance = new Log(); // Lazy Initialization
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("LOG: " + message);
    }
}

public class SingletonPattern {
    public static void main(String[] args) {
        Log log1 = Log.getInstance();
        log1.log("First Message");

        Log log2 = Log.getInstance();
        log2.log("Second Message");

        if (log1 == log2) {
            System.out.println("Singleton Pattern Success. Both are from single instance.");
        } else {
            System.out.println("Singleton Pattern Failed. Both are from different instances.");
        }
    }
}
