const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHendler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let massage = err.massage;

  //Check for mongoose bad ObjectId
  if (err.name === "CastError" && err.kind === "ObjectId") {
    massage = `Resource not found`;
    statusCode = 404;
  }

  res.status(statusCode).json({
    massage,
    stack: process.env.NODE_ENV === "production" ? "🥮" : err.stack,
  });
};

export { notFound, errorHendler };
