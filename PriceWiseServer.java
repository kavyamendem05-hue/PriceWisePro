
import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpExchange;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.file.Files;
import java.nio.file.Path;

public class PriceWiseServer {

    public static void main(String[] args) throws IOException {

        int port = Integer.parseInt(
            System.getenv().getOrDefault("PORT", "8081")
        );

        HttpServer server = HttpServer.create(
            new InetSocketAddress("0.0.0.0", port), 0
        );

        server.createContext("/", exchange -> {
            serveFile(exchange);
        });

        server.start();

        System.out.println("PriceWise Java Server Started!");
        System.out.println("Port: " + port);
    }

    private static void serveFile(HttpExchange exchange)
            throws IOException {

        String requestPath = exchange.getRequestURI().getPath();

        if (requestPath.equals("/")) {
            requestPath = "/index.html";
        }

        Path root = Path.of(".").toAbsolutePath().normalize();
        Path file = root.resolve(requestPath.substring(1))
                       .normalize();

        if (!file.startsWith(root) || !Files.isRegularFile(file)) {
            String message = "404 - File Not Found";
            byte[] data = message.getBytes();

            exchange.sendResponseHeaders(404, data.length);

            try (OutputStream out = exchange.getResponseBody()) {
                out.write(data);
            }
            return;
        }

        String contentType = "text/plain";

        if (requestPath.endsWith(".html")) {
            contentType = "text/html; charset=UTF-8";
        } else if (requestPath.endsWith(".css")) {
            contentType = "text/css; charset=UTF-8";
        } else if (requestPath.endsWith(".js")) {
            contentType = "application/javascript; charset=UTF-8";
        } else if (requestPath.endsWith(".png")) {
            contentType = "image/png";
        } else if (requestPath.endsWith(".jpg")
                || requestPath.endsWith(".jpeg")) {
            contentType = "image/jpeg";
        } else if (requestPath.endsWith(".svg")) {
            contentType = "image/svg+xml";
        } else if (requestPath.endsWith(".webp")) {
            contentType = "image/webp";
        }

        byte[] data = Files.readAllBytes(file);

        exchange.getResponseHeaders().set(
            "Content-Type", contentType
        );

        exchange.sendResponseHeaders(200, data.length);

        try (OutputStream out = exchange.getResponseBody()) {
            out.write(data);
        }
    }
}
