const User = require("./../models/users");
const jwt = require("jsonwebtoken");

exports.loginRoute = function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const RSA_PRIVATE_KEY =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhMSI6IkRhdGEgMSIsImRhdGEyIjoiRGF0YSAyIiwiZGF0YTMiOiJEYXRhIDMiLCJkYXRhNCI6IkRhdGEgNCIsImlhdCI6MTUyNTE5MzM3NywiZXhwIjoxNTI1MjM2NTc3LCJhdWQiOiJodHRwOi8vbXlzb2Z0Y29ycC5pbiIsImlzcyI6Ik15c29mdCBjb3JwIiwic3ViIjoic29tZUB1c2VyLmNvbSJ9.ID2fn6t0tcoXeTgkG2AivnG1skctbCAyY8M1ZF38kFvUJozRWSbdVc7FLwot-bwV8k1imV8o0fqdv5sVY0Yzmg";

  User.findOne({ where: { UserEmail: email } })
    .then((user) => {
      if (user) {
        if (password === user.UserPassword) {
          const userId = user.UserEmail;

          const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
            algorithm: "HS256",
            expiresIn: 120,
            subject: userId,
          });
          res.send(jwtBearerToken);
        } else {
          res.send({ massage: "Invalid password" });
        }
      } else {
        res.status(404).send({
          message: `Invalid email`,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Internal Server Error",
      });
    });
};
