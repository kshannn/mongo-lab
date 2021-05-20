// QUESTION 2a

db.companies.find({
    "founded_year": 2006
},{
    "name":1,
    "founded_year": 1
})

// QUESTION 2b
db.companies.find({
    "founded_year":{
        "$gt":2000
    }
},{
    "name":1,
    "founded_year": 1
})

// QUESTION 2c
db.companies.find({
    "founded_year":{
        "$gte":1900,
        "$lte":2010
    }
},{
    "name":1,
    "founded_year": 1
})


// QUESTION 3a
db.companies.find({
    "ipo.valuation_amount":{
        "$gt": 100000000
    }
},{
    "name":1,
    "ipo.valuation_amount": 1
})

// QUESTION 3b

db.companies.find({
    "ipo.valuation_amount":{
        "$gt": 100000000,
    },
    "ipo.valuation_currency_code":"USD"
},{
    "name":1,
    "ipo.valuation_amount": 1,
    "ipo.valuation_currency_code":1
})

// ## PAGE 2 (sample_training database) ##

// QUESTION 2
db.inspections.find({
    "result":"Violation Issued"
},{
    "business_name":1,
    "result":1
})

// QUESTION 3
db.inspections.find({
    "result":"Violation Issued",
    "address.city":"NEW YORK"
},{
    "business_name":1,
    "result":1,
    "address.city":1
})

// QUESTION 4
db.inspections.find({
    "address.city":"NEW YORK"
}).count()

// no need to project if it's just counting

// QUESTION 5
db.inspections.find({
    "result":{
        "$ne":"Violation Issued"
    },
    "address.city":"RIDGEWOOD"
}).count()

// ## Page 3 (sample_analytics database - accounts)

// QUESTION 1
db.accounts.find({
    "products":"InvestmentStock"
},{
    "account_id":1,
    "products":1
})

// QUESTION 2
db.accounts.find({
    "products":{
        "$all": ["Commodity","InvestmentStock"]
    }
},{
    "account_id":1,
    "products":1
})

// QUESTION 3
db.accounts.find({
    "products":{
        "$in": ["Commodity","CurrencyService"]
    }
},{
    "account_id":1,
    "products":1
})

// QUESTION 4
db.accounts.find({
    "products":{
        "$ne": "CurrencyService"
    }
},{
    "account_id":1,
    "products":1
})

// QUESTION 5
db.accounts.find({
    "products":{
        "$all": ["InvestmentStock","InvestmentFund"]
    },
    "limit":{
        "$gt": 1000
    }
},{
    "account_id":1,
    "products":1,
    "limit":1
})

// ## Page 4 (sample_analytics database - transactions doc)

// QUESTION 1

db.transactions.find({
    'account_id':443178
},{
    'transactions':{
        '$elemMatch':{
            'transaction_code':'buy',
            'amount':{
                '$gt':4000
            }
        }
    }
}).pretty()



// QUESTION 2

db.transactions.find({
    'account_id':443178
},{
    'transactions':{
        '$elemMatch':{
            'transaction_code':'buy',
            'symbol':'msft'
        }
    }
}).pretty()


// QUESTION 3

db.transactions.find({
    'bucket_end_date': {
        '$lt': ISODate('2017-01-01'),
        '$gte': ISODate('2016-01-01')
    }
},{
    'transactions':{
        '$elemMatch':{
            'transaction_code':'sell',
            'symbol': 'appl'
        }
    }
}).pretty()

// QUESTION 4

db.transactions.find({
    'transactions':{
        '$elemMatch':{
            'transaction_code':'sell',
            'symbol':'appl',
            'bucket_start_date':{
                '$gte': ISODate('2015-01-01'),
                '$lt': ISODate('2016-01-01')
            },
            'bucket_end_date':{
                '$gte': ISODate('2016-01-01'),
                '$lt':ISODate('2017-01-01')   
            }
        }
    }
},{
    transactions: 1
})