const express = require('express');
const usersRouter = require("./routes/usersrouter");

const app = express();
const PORT = process.env.PORT || 8090;

app.use('/api/v1/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})