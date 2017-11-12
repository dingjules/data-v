import audience from '../data/audience.json';
import bandwidth from '../data/bandwidth.json';
import country from '../data/country.json';
import isp from '../data/isp.json';
import platform from '../data/platform.json';
import streams from '../data/streams.json';
import usage from '../data/usage.json';

export const formateTimeRelatedData = data => {
    const res = [];
    Object.keys(data).forEach(key => {
        const dataSet = [];
        data[key].map(item => {
            dataSet.push({
                x: item[0],
                y: item[1]
            });
        });
        res.push(
            {
                label: key,
                data: dataSet
            }
        );
    });
    return { datasets: res };
};

export const formatData = (data, labelKey) => {
    const res = {
        labels: [],
        datasets: []
    }, dataByCatgory = {};
    data.map(item => {
        res.labels.push(item[labelKey]);
        Object.keys(item).forEach(key => {
            if (key !== labelKey) {
                dataByCatgory[key] = dataByCatgory[key] || [];
                dataByCatgory[key].push(item[key]);
            }
        });
    });
    
    Object.keys(dataByCatgory).forEach(key => {
        res.datasets.push(
            {
                label: key,
                data: dataByCatgory[key]
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