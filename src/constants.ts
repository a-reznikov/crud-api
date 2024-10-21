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
  INVALID_DATA = `Please make sure that you have entered the correct User data.`,
  INVALID_USER_ID = `Please make sure that you have entered the correct UserID.`,
  SERVER_ERROR = `Oops. Something bad happened on server side.`,
}
