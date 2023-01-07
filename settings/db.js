const Sequelize = require("sequelize");

const sequelize = new Sequelize("pazani", "zhy", "pass1234", {
  dialect: "mysql",
  host: "127.0.0.1",
  define: {
    timestamps: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

module.exports = sequelize;
