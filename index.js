const express = require("express");
const blogRoutes = require("./routes/blogs");
const connectDb = require("./config/databases");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());


app.use("/api/v1", blogRoutes);

connectDb();

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
