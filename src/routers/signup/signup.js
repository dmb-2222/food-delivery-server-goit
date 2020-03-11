const qs = require("querystring");
const fs = require("fs");

const saveUser = user => {
  // получить файл с юзером
  // найти путь папки users
  // сохранить туда файл
};

const signupRoute = (request, response) => {
  // Взять данные что пришли
  if (request.method === "POST") {
    let body = "";
    let username = "";
    request.on("data", function(data) {
      body = body + data;
      username = JSON.parse(body).username;

      fs.writeFile(`src/db/users/${username}.json`, `${body}`, function(err) {
        if (err) return console.log("Not created", err);
        console.log("File is created successfully.");

        const userData = require(`../../db/users/${username}.json`);

        response.writeHead(200, { "Content-type": "text/html" }),
          response.write(JSON.stringify({ status: "success", user: userData }));
        response.end();
      });
    });

    request.on("end", function() {
      const post = qs.parse(body);
      // console.log("data", post);
    });
  }

  // Взять username с данных, сохранить в переменную

  // Сохраняем данные в <username>.json

  // Сохранить <username>.json в папку users

  // Отправляем файл в ответе с данными юзера
  // использовать response
};

module.exports = signupRoute;
