import { UserController } from "../controllers/user";
import { TweetController } from "../controllers/tweet";
import { MessageController } from "../controllers/message";

export const Routes = [
  {
    method: "post",
    route: "/api/signup",
    controller: UserController,
    action: "Save"
  },
  {
    method: "post",
    route: "/api/login",
    controller: UserController,
    action: "Login"
  },
  {
    method: "get",
    route: "/api/users",
    controller: UserController,
    action: "All"
  },
  {
    method: "get",
    route: "/api/user",
    controller: UserController,
    action: "One"
  },
  {
    method: "post",
    route: "/api/tweets",
    controller: TweetController,
    action: "NewTwit"
  },
  {
    method: "get",
    route: "/api/tweets",
    controller: TweetController,
    action: "All"
  },
  {
    method: "post",
    route: "/api/messages",
    controller: MessageController,
    action: "NewMessage"
  },
  {
    method: "get",
    route: "/api/messages",
    controller: MessageController,
    action: "All"
  }
];
