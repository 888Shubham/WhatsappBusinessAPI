import express from "express";
import bodyParser from "body-parser";
import 'dotenv/config'
import axios from "axios";



const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    let resData = {
        status: false,
        answare: ''
    }
    resData.status = true;
    resData.message = 'Hello Every One Form From Code 180. This API is working......';
    return res.status(200).json(resData);
});

app.post('/sendMessage', async (req, res) => {
    let resData = {
        status: false,
        answer: ''
    };
    try {
        const response = await axios.post(
            'https://graph.facebook.com/v20.0/381216991741752/messages',
            {
                messaging_product: 'whatsapp',
                to: process.env.TO,
                type: 'template',
                template: {
                    name: 'hello_world',
                    language: {
                        code: 'en_US'
                    }
                }
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.SECRET_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        resData.status = true;
        resData.answer = response.data;
        return res.status(200).json(resData);
    } catch (e) {
        resData.status = false;
        resData.answer = e.message;
        return res.status(500).json(resData);
    }
});

app.listen(PORT, () => {
    console.log(`Server runs at ${PORT}`);
})