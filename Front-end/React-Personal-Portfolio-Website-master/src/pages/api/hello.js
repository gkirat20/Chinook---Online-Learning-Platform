var AWS = require("aws-sdk");
export default (req, res) => {
    AWS.config.getCredentials(function(err) {
        if (err) res.status(200).json({ name: 'error' });
        else {
          res.status(200).json({ AccessKey: AWS.config.credentials.accessKeyId });
        }
      });
  }