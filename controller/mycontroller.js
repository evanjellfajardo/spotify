const song = require('../models/song')

const main = {
    index: (req, res) =>{
        res.render('index');
    },

    add: (req, res) =>{
        res.render('add');
    },

    edit: (req, res) =>{
        res.render('index');
    },

    delete: (req, res) =>{
        res.render('delete');
    },


    save: (req, res) =>{
        const data = req.body;
        song.create(data,(err)=>{
            if(err) throw err;
            res.redirect('/')
        });
    }
};

module.exports = main;