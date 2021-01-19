const axios = require("axios");
const cheerio = require('cheerio')

/**
 * scraps the webpage and returns the current job posting in JSON
 * @param {string} companyURL the company URL we want to pull jobs from
 */
exports.getBambooHRJobs = function (companyURL) {
    return new Promise(function (res, rej) {
        var config = {
            method: 'get',
            url: companyURL
        };

        axios(config)
            .then(function (response) {
                const $ = cheerio.load(response.data);

                var json = JSON.parse($("#positionData").html());
                res(json);
            })
            .catch(function (error) {
                rej(error)
            });
    });
}