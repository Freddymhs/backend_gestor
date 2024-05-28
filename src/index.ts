import { initializeServer } from "./server";
import cors from "cors";

// ===================cors
// const corsOptions = {
//   origin: process.env.ALLOWED_ORIGINS?.split(",") || "*", // especifica los orígenes permitidos
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true, // si necesitas permitir cookies
// };
// ===================helmet
// .then((app) => {
//   app.use(helmet());
//
//
// ===================gestinar errores de forma global
//
//
//
//
//
// ===================Rate Limitingpara evitar ataques
//
//
//
//
//
//
//
//
//
//
//
//
// exist variables
if (!process.env.PORT || !process.env.DOMAIN || !process.env.NODE_ENV) {
  console.error("Error: Missing required environment variables");
  process.exit(1);
}
// run server
initializeServer()
  .then((app) => {
    app.use(cors());
    app.listen(process.env.PORT, () => {
      console.log(`
    -Server is ready!
  
    Environment: ${process.env.NODE_ENV}
    API Gateway:  http://${process.env.DOMAIN}:${process.env.PORT}/graphql
  
    (Press CTRL+C to stop)
    `);
    });
  })
  .catch((error) => {
    console.error("Start server with error:", error);
  });
