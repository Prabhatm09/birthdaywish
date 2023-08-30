import connectMongoDb from "../../libs/mongodb";
import Topic from "../../models/topic";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
connectMongoDb();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name } = req.body;
    const user = await new Topic({ name });
    try {
      await user
        .save()
        .then(() => {
          res.status(201).send("user created");
        })
        .catch((err) => {
          res.status(403).send("user not created. Plz try again");
        });
    } catch (error) {
      res.status(402).send(error.message);
    }
  } else {
    res.status(422).send("req method not supported");
  }
}
