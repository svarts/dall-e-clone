import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuraiton = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const api = new OpenAIApi(configuraiton);

router.route('/').get((req, res) => {
    res.send('Hello from Dall-e');
});

export default router;