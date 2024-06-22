import 'dotenv/config';
import {get} from 'env-var';


export const envs = {

    PORT: get('PORT').required().asPortNumber(),
    DISCOR_WEBHOOK_URL: get('DISCOR_WEBHOOK_URL').required().asString(),

    SECRET_TOKEN: get('SECRET_TOKEN').required().asString(),
}