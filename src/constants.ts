export enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export enum Route {
  USERS = "/api/users",
  USER_BY_ID = "/api/users/",
}

export enum Message {
  NOT_FOUND = `Unfortunately, we do not have information on your request.`,
  NOT_FOUND_USER = `Unfortunately, there is no such User in the database.`,
}
