import audience from '../data/audience.json';
import bandwidth from '../data/bandwidth.json';
import country from '../data/country.json';
import isp from '../data/isp.json';
import platform from '../data/platform.json';
import streams from '../data/streams.json';
import usage from '../data/usage.json';
export const DataHelperService = () => {
    'ngInject';

    const formateData = data => {
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
        return res;
    };

    const
        getAudience = () => formateData(audience),
        getBandwidth = () => formateData(bandwidth),
        getCountry = () => country,
        getIsp = () => isp,
        getPlatform = () => platform,
        getStreams = () => streams,
        getUsage = () => formateData(usage);

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