import "./init";
import { createExpressServer } from "routing-controllers";
import { join } from "path";

const app = createExpressServer({
  routePrefix: "/api",
  validation: {
    whitelist: true,
    forbidNonWhitelisted: true,
  },
  defaultErrorHandler: false,
  middlewares: [join(`${__dirname}/core/middlewares/global/*.middleware.{js,ts}`)],
  controllers: [join(`${__dirname}/**/*.controller.{js,ts}`)],
});

app.listen(process.env.PORT, () => console.log("api is up and running!")).setTimeout(Number(process.env.SERVER_TIMEOUT_MS));
