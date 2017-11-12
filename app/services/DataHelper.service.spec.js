import { formateTimeRelatedData, formatData } from './DataHelper.service';

describe('Service: DataHelper', () => {
    it('should formate time realted data', () => {
        const data = {
            'cdn': [
                [
                    0,
                    1
                ],
                [
                    2,
                    3
                ]
            ],
            'p2p': [
                [
                    4,
                    5
                ],
                [
                    6,
                    7
                ]
            ]
        };
        expect(formateTimeRelatedData(data)).toEqual({
            datasets: [
                {
                    label: 'cdn',
                    data: [{
                        x: 0,
                        y: 1
                    },
                    {
                        x: 2,
                        y: 3
                    }]
                },
                {
                    label: 'p2p',
                    data: [{
                        x: 4,
                        y: 5
                    },
                    {
                        x: 6,
                        y: 7
                    }]
                }
            ]
        });
    });

    it('should formate data', () => {
        const data = [{
            'cdn': 0,
            'p2p': 1,
            'total': 1,
            'percentage': 71,
            'country': 'PL'
        },
        {
            'cdn': 2,
            'p2p': 8,
            'total': 10,
            'percentage': 80,
            'country': 'GB'
        }];

        expect(formatData(data, 'country')).toEqual({
            labels: ['PL', 'GB'],
            datasets: [
                {
                    label: 'cdn',
                    data: [0, 2]
                },
                {
                    label: 'p2p',
                    data: [1, 8]
                },
                {
                    label: 'total',
                    data: [1, 10]
                },
                {
                    label: 'percentage',
                    data: [71, 80]
                }
            ]
        });
    });
});
