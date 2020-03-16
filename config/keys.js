// module.exports = {
//     mongoURI: 'mongodb+srv://jlui820:neHcZmtxXKJOCdWB@cluster0-pwhqf.mongodb.net/test?retryWrites=true&w=majority',
//     //Make sure this is your own unique string
//     secretOrKey: 'chql85oD1R'
// }



if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod');
} else {
    module.exports = require('./keys_dev');
}