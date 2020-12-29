const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId


var { PostMessage } = require('../models/postMessage')


router.get('/', (req, res) => {
    PostMessage.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
})

router.get('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id)

    PostMessage.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('One records : ' + JSON.stringify(err, undefined, 2))
    })
})


router.post('/', (req, res) => {
    var newRecord = new PostMessage({
        // message: req.body.message,
        // title: req.body.title
        // message: req.body.message
        photograph :req.body.photograph,
firstname :req.body.firstname,
middlename :req.body.middlename,
lastname :req.body.lastname,
gender :req.body.gender,
bday :req.body.bday,
apt :req.body.apt,
floor :req.body.floor,
street :req.body.street,
city :req.body.city,
state :req.body.state,
country :req.body.country,
zip :req.body.zip,
tapt :req.body.tapt,
tfloor :req.body.tfloor,
tstreet :req.body.tstreet,
tcity :req.body.tcity,
tstate :req.body.tstate,
tcountry :req.body.tcountry,
tzip :req.body.tzip,
countrycode :req.body.countrycode,
areacode :req.body.areacode,
phonenum :req.body.phonenum,
mcountrycode :req.body.mcountrycode,
mareacode :req.body.mareacode,
mmobilenum :req.body.mmobilenum,
ecountrycode :req.body.ecountrycode,
eareacode :req.body.eareacode,
emobilenum :req.body.emobilenum,
marriage :req.body.marriage,
email1 :req.body.email1,
emailAlt :req.body.emailAlt,
passport :req.body.passport,
visa :req.body.visa,
visaexpdate :req.body.visaexpdate,
insexpdate :req.body.insexpdate,
cv :req.body.cv,
dfj :req.body.dfj,
basicSal :req.body.basicSal,
otherAll :req.body.otherAll,
incentives :req.body.incentives,
worklocation :req.body.worklocation,
department :req.body.department,
joininggrade :req.body.joininggrade,
role :req.body.role,
contract :req.body.contract,
acname :req.body.acname,
bank :req.body.bank,
branchcode :req.body.branchcode,
ifsc :req.body.ifsc,
swiftcode :req.body.swiftcode,
acnum :req.body.acnum,
ibannum :req.body.ibannum

    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new record : ' + JSON.stringify(err, undefined, 2))
    })
})

router.put('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id)

    var updatedRecord = {
        // message: req.body.message,
        // title: req.body.title
        // message: req.body.message
        photograph :req.body.photograph,
firstname :req.body.firstname,
middlename :req.body.middlename,
lastname :req.body.lastname,
gender :req.body.gender,
bday :req.body.bday,
apt :req.body.apt,
floor :req.body.floor,
street :req.body.street,
city :req.body.city,
state :req.body.state,
country :req.body.country,
zip :req.body.zip,
tapt :req.body.tapt,
tfloor :req.body.tfloor,
tstreet :req.body.tstreet,
tcity :req.body.tcity,
tstate :req.body.tstate,
tcountry :req.body.tcountry,
tzip :req.body.tzip,
countrycode :req.body.countrycode,
areacode :req.body.areacode,
phonenum :req.body.phonenum,
mcountrycode :req.body.mcountrycode,
mareacode :req.body.mareacode,
mmobilenum :req.body.mmobilenum,
ecountrycode :req.body.ecountrycode,
eareacode :req.body.eareacode,
emobilenum :req.body.emobilenum,
marriage :req.body.marriage,
email1 :req.body.email1,
emailAlt :req.body.emailAlt,
passport :req.body.passport,
visa :req.body.visa,
visaexpdate :req.body.visaexpdate,
insexpdate :req.body.insexpdate,
cv :req.body.cv,
dfj :req.body.dfj,
basicSal :req.body.basicSal,
otherAll :req.body.otherAll,
incentives :req.body.incentives,
worklocation :req.body.worklocation,
department :req.body.department,
joininggrade :req.body.joininggrade,
role :req.body.role,
contract :req.body.contract,
acname :req.body.acname,
bank :req.body.bank,
branchcode :req.body.branchcode,
ifsc :req.body.ifsc,
swiftcode :req.body.swiftcode,
acnum :req.body.acnum,
ibannum :req.body.ibannum
    }

    PostMessage.findByIdAndUpdate(req.params.id, { $set: updatedRecord },{new:true}, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while updating a record : ' + JSON.stringify(err, undefined, 2))
    })
})

router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id)

    PostMessage.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while deleting a record : ' + JSON.stringify(err, undefined, 2))
    })
})


module.exports = router