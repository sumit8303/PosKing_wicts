const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    isCryptocurrency: {
        type: String,
        required: true
    },
    exchangeRate: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


// Create the model
module.exports = mongoose.model('Currency', currencySchema);
