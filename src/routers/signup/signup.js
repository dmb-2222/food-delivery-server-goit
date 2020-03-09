const qs = require("querystring");

const saveUser = user => {
  // получить файл с юзером
  // найти путь папки users
  // сохранить туда файл
};

const signupRoute = (request, response) => {
  // Взять данные что пришли

  if (request.method === "POST") {
    let body = "";

    request.on("data", function(data) {
      body = body + data;

      console.log("Incoming data!!!!", JSON.parse(body).username);
    });

    request.on("end", function() {
      const post = qs.parse(body);
      console.log("data", post);
    });
  }

  // Взять username с данных, сохранить в переменную

  // Сохраняем данные в <username>.json

  // Сохранить <username>.json в папку users

  // Отправляем файл в ответе с данными юзера
  // использовать response
};

module.exports = signupRoute;
