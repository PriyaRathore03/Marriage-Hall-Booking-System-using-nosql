const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/bb', (req, res) => {
    res.render("admin", {
        viewTitle: "Insert Employee"
    });
});
router.post('/bb', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});

function insertRecord(req, res) {
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.halls = req.body.halls;
    user.halls = req.body.halls;
    user.event = req.body.event;
    user.state = req.body.state;
    user.guest = req.body.guest;
    user.date1 = req.body.date1;
    user.save((err, doc) => {
        if (!err)
            res.redirect('user/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("/", {
                    viewTitle: "Insert Employee",
                    user: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}

function updateRecord(req, res) {
    User.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('admin'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("bb", {
                    viewTitle: 'Update Employee',
                    user: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}


router.get('/admin', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.render("admin", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});


function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'name':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("bb", {
                viewTitle: "Update Employee",
                employee: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('admin');
        }
        else { console.log('Error in employee delete :' + err); }
    });
});

module.exports = router;