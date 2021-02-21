require('dotenv/config');

export const isAuthenticated = async (req, res, next) => {
  if (!req.query.apiKey) {
    return res.status(401).send({
      message: "Unauthorized to access this endpoint"
    })
  }
}