const http = require("http");
const fs = require("fs");
//파이썬으로도 만들수 있는가 ? 찾으면 그만이지만
// 이것 검증 끝나면 파이썬으로 진행 후 제대로 이해 하고 있는지 확인 필요.

http
  .createServer(function (request, response) {
    console.log(request.method);
    console.log(request.url);

    let writeHeadObject = {
      "content-Type": "text/html",
    };
    response.writeHead(200, writeHeadObject);

    fs.readFile("./index.html", function (err, data) {
      if (err) {
        console.error("파일을 읽지 못했습니다.");
      } else {
        response.end(data);
      }
    });
  })
  .listen(8080);
// 인풋처리도 가능한가? 기본 서빙 입력처리 가능한가.
