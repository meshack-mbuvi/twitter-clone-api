import { Request, Response } from "express";

export class TweetController {
  Twit = require("../../models").Twit;
  User = require("../../models").User;

  TweetController() {
    this.Twit.sync();
  }

  public async All(req: Request, res: Response) {
    try {
      const Tweets = await this.Twit.findAll({
        attributes: ["id", "text", "createdAt"],
        include: [
          {
            model: this.User,
            as: "author",
            attributes: ["id", "name", "username"]
          }
        ],
        order: [["createdAt", "DESC"]]
      });
      return res.send(Tweets);
    } catch (error) {
      console.log({error})
      return res.send(error.message);
    }
  }

  public async NewTwit(req: Request, res: Response) {
    try {
      const authorId = req["user"].id;
      const text = req.body.text.trim();

      if(!authorId){
        return res.status(400).send({ message: "You are not logged in" });
      }

      if (!text) {
        return res.status(400).send({ message: "A tweet must have a body" });
      }

      const Tweet = await this.Twit.create({
        text,
        author_id: authorId
      });

      return res.status(201).send(Tweet);
    } catch (error) {
      return res.send({
        message: "An error occurred while creating this twit",
        error: error.message
      });
    }
  }
}
