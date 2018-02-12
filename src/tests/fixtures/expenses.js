import moment from 'moment';

export default [
    {
        id: '1',
        description: 'desc1 RR',
        note: 'note1',
        amount: 500,
        createdAt: moment(0).add(4, 'days').valueOf()
    },
    {
        id: '2',
        description: 'desc2 RR',
        note: 'note2',
        amount: 100,
        createdAt: 0
    },
    {
        id: '3',
        description: 'desc3',
        note: 'note3',
        amount: 300,
        createdAt: moment(0).add(-4, 'days').valueOf()
    },
]