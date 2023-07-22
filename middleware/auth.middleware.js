const jwt = require("jsonwebtoken");

const accessTokenSecret =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhMSI6IkRhdGEgMSIsImRhdGEyIjoiRGF0YSAyIiwiZGF0YTMiOiJEYXRhIDMiLCJkYXRhNCI6IkRhdGEgNCIsImlhdCI6MTUyNTE5MzM3NywiZXhwIjoxNTI1MjM2NTc3LCJhdWQiOiJodHRwOi8vbXlzb2Z0Y29ycC5pbiIsImlzcyI6Ik15c29mdCBjb3JwIiwic3ViIjoic29tZUB1c2VyLmNvbSJ9.ID2fn6t0tcoXeTgkG2AivnG1skctbCAyY8M1ZF38kFvUJozRWSbdVc7FLwot-bwV8k1imV8o0fqdv5sVY0Yzmg";

exports.authenticateJWT = (req, res, next) => {
  console.log("XAXA");
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      console.log(user);
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
