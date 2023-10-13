package learn.fansite;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

//    @Bean
//    public WebMvcConfigurer corsConfigurer() {
//
//        // Configure CORS globally versus
//        // controller-by-controller.
//        // Can be combined with @CrossOrigin.
//        return new WebMvcConfigurer() {
//
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                registry.addMapping("/**")
//                        .allowedOrigins("*")
//                        // Should tighten up CORS policies.
//                        // For now, we allow everything.
//
//                        .allowedMethods("GET");
//            }
//        };
//    }
}
