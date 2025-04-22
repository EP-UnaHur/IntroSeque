const express = require("express");
const db = require("./db/models");
const app = express();
const { userRoute, rolesRoute } = require("./routes");
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/user", userRoute);
app.use("/rol", rolesRoute);

app.listen(PORT, async () => {
  console.log(`La app arranco en el puerto ${PORT}.`);
  //await db.sequelize.sync({ force: true });
});
