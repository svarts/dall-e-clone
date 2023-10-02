import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

const { Configuration, OpenAIApi } = require('openai');

dotenv.config();

const router = express.Router();

const configuraiton = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuraiton);

router.route('/').get((req, res) => {
    res.send('Hello from Dall-e');
});

export default router;