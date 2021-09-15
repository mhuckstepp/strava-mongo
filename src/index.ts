import * as dotenv from "dotenv";
dotenv.config();
import server from './app'

if (!process.env.PORT) {
  process.exit(1);
}

const port: number = parseInt(process.env.PORT as string, 10);

server.use("/", (req: any, res: any) => {
  res.send({ message: "MongoDB Backend Up" });
});

server.listen(port, () => {
  console.log("listening on " + port);
});
