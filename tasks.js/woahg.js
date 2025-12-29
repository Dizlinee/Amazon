import { isSatSan } from "../tasks.js/dayjs.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


let date = dayjs();
        console.log(date.format('dddd, MMMM D'));
        console.log(isSatSan(date));

        date = dayjs().add(2, 'day');
        console.log(date.format('dddd, MMMM D'));
        console.log(isSatSan(date));

        date = dayjs().add(4, 'day');
        console.log(date.format('dddd, MMMM D'));
        console.log(isSatSan(date));

        date = dayjs().add(6, 'day');
        console.log(date.format('dddd, MMMM D'));
        console.log(isSatSan(date));
