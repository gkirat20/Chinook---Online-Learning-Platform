import { APIGatewayClient, CreateApiKeyCommand } from "@aws-sdk/client-api-gateway";
export default (req, res) => {
    // Create a new API key
    const apiGateway = new APIGatewayClient({
        region: "us-east-1",
    });




    const createApiKeyCommand = new CreateApiKeyCommand({
        enabled: true,
        generateDistinctId: true,
        usagePlanId: "azwfay",
        name: "My API Key21",
        value: "",
    });
    
    apiGateway.send(createApiKeyCommand, (err, apiKey) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err });
        }
        else {

         
            
            // send Get reqiest to https://5tz8otq5bh.execute-api.us-east-1.amazonaws.com/v1/courses/
            // with the API key as a header
            const options = {
                method: "GET",
                headers: {
                    "x-api-key": "ENC931Nf4xAetX5EZnsU7ylOABDDlKH9Npee9wJi",
                },
            };
            const url = "https://5tz8otq5bh.execute-api.us-east-1.amazonaws.com/v1/courses/";
            fetch(url, options)
                .then((response) => response.json())
                .then((data) => {
                    res.status(200).json(data);
                }).catch((error) => {
                    console.log(error);
                    res.status(500).json({ error: error });
                }
            );
            
        }
    });



}
