/*jshint esversion:6, node:true*/
'use strict';

const fs = require('fs');
const access = require('fs').access;

function exists(filepath){
    return new Promise((resolve, reject)=>{
        access(filepath, fs.constants.R_OK, (err) => {
            if(err) reject(err);
            else resolve(filepath);
        });
    });
}

module.exports = exists;
