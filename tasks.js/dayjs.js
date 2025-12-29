import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

const currentDate = dayjs().add(5, 'day'); 
console.log(currentDate.format('MMMM-DD'));

const currentDate2 = dayjs().add(1, 'month'); 
console.log(currentDate2.format('MMMM-DD'));

const currentDate3 = dayjs().subtract(1, 'month'); 
console.log(currentDate3.format('MMMM-DD'));

const currentDate4 = dayjs().format('dddd')
console.log(currentDate4)

export function isSatSan(date) {
    const dayOfWeek = date.format('dddd')
    return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday'
    }
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




