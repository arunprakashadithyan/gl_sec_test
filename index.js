const axios = require('axios');
// const { response } = require('express');
const dotenv = require('dotenv');


(async () => {
    const response = await axios.get('https://gitlab.com/api/v4/projects/46880399/merge_requests/3', {
        headers: {
            'PRIVATE-TOKEN': "glpat-SYnr3CfgFaWnnzDwfgVE",
        }
    })
    console.log(response);
})()