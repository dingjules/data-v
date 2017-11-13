import randomColor from 'randomcolor';
import Color from 'chartjs-color';

import audience from '../data/audience.json';
import bandwidth from '../data/bandwidth.json';
import country from '../data/country.json';
import isp from '../data/isp.json';
import platform from '../data/platform.json';
import streams from '../data/streams.json';
import usage from '../data/usage.json';

const getRandomColorSet = (defaultColor) => {
    if (defaultColor) {
        return {
            borderColor: defaultColor,
            backgroundColor: Color(defaultColor).clearer(0.8).rgbString()
        };
    }
    const color = randomColor({
        luminosity: 'dark',
        format: 'rgba',
        alpha: 1
    });
    return {
        borderColor: color,
        backgroundColor: Color(color).clearer(0.8).rgbString()
    };
};

export const formateTimeRelatedData = (data, color) => {
    const res = [];
    Object.keys(data).forEach(key => {
        const dataSet = [];
        const colorSet = getRandomColorSet(color);
        data[key].map(item => {
            dataSet.push({
                x: item[0],
                y: item[1]
            });
        });
        res.push(
            {
                label: key,
                data: dataSet,
                backgroundColor: colorSet.backgroundColor,
                borderColor: colorSet.borderColor
            }
        );
    });
    return { datasets: res };
};

export const formatData = (data, labelKey, color) => {
    const res = {
        labels: [],
        datasets: [],
        backgroundColor: [],
        borderColor: []
    }, dataByCatgory = {};
    data.map(item => {
        res.labels.push(item[labelKey]);
        Object.keys(item).forEach(key => {
            if (key !== labelKey) {
                dataByCatgory[key] = dataByCatgory[key] || { data: [], backgroundColor: [], borderColor: [] };
                dataByCatgory[key].data.push(item[key]);
                const colorSet = getRandomColorSet(color);
                dataByCatgory[key].backgroundColor.push(colorSet.backgroundColor);
                dataByCatgory[key].borderColor.push(colorSet.borderColor);
            }
        });
    });

    Object.keys(dataByCatgory).forEach(key => {
        res.datasets.push(
            {
                label: key,
                data: dataByCatgory[key].data,
                backgroundColor: dataByCatgory[key].backgroundColor,
                borderColor: dataByCatgory[key].borderColor
            }
        );
    });
    return res;
};

export const DataHelperService = () => {
    'ngInject';

    const
        getAudience = () => formateTimeRelatedData(audience),
        getBandwidth = () => formateTimeRelatedData(bandwidth),
        getCountry = () => formatData(country, 'country'),
        getIsp = () => formatData(isp, 'isp'),
        getPlatform = () => formatData(platform, 'platform'),
        getStreams = () => formatData(streams, 'manifest'),
        getUsage = () => formateTimeRelatedData(usage);

    return {
        getAudience,
        getBandwidth,
        getCountry,
        getIsp,
        getPlatform,
        getStreams,
        getUsage
    };
};