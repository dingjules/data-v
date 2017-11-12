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
        data.map(item => {
            res.push({
                x: item[0],
                y: item[1]
            });
        });
        return res;
    };
    
    const 
        getAudience = () => formateData(audience.audience),
        getBandwidth = () => bandwidth,
        getCountry = () => country,
        getIsp = () => isp,
        getPlatform = () => platform,
        getStreams = () => streams,
        getUsage = () => usage;
   
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