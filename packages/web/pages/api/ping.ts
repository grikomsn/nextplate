import { createApiHandler } from "~/lib/next";

export default createApiHandler().all((_req, res) => {
  res.status(200).send("200 OK");
});
