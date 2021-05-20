![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome kshannn,

This is the Code Institute student template for Gitpod. We have preinstalled all of the tools you need to get started. You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Gitpod and the extensions we use.

## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to *Account Settings* in the menu under your avatar.
2. Scroll down to the *API Key* and click *Reveal*
3. Copy the key
4. In Gitpod, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidently make it public then you can create a new one with _Regenerate API Key_.

## Updates Since The Instructional Video

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**May 10 2021:** Added `heroku_config` script to allow Heroku API key to be stored as an environment variable.

**April 7 2021:** Upgraded the template for VS Code instead of Theia.

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

---

Happy coding!


db.listingsAndReviews.find({},{
    "name":1,
    "address":1,
    "beds":1
}).pretty()

db.listingsAndReviews.find({},{
    "name":1,
    "address":1,
    "beds":1,
    "minimum_nights":1,
    "maximum_nights":1
}).pretty()

db.listingsAndReviews.find({},{
    "name":1,
    "address":1,
    "beds":1,
    "minimum_nights":1,
    "maximum_nights":1
}).pretty().limit(5)

db.listingsAndReviews.find({},{
    "name":1,
    "address.country":1,
}).pretty().limit(5)

db.listingsAndReviews.find({
    "beds":2
},{
    "name":1,
    "beds":1,
})

db.listingsAndReviews.find({
    "beds":2,
    "address.country": "Brazil"
},{
    "name":1,
    "beds":1,
    "address.country":1
}).pretty()



db.listingsAndReviews.find({
    "beds":{
        "$gt":3
    },
    "address.country": "Brazil"
},{
    "name":1,
    "beds":1,
    "address.country":1
}).pretty()

db.listingsAndReviews.find({
    "beds":{
        "$gt":3,
        "$lt":10
    },
    "address.country": "Brazil"
},{
    "name":1,
    "beds":1,
    "address.country":1
}).pretty()

db.listingsAndReviews.find({
    "amenities":"Kitchen"
},{
    "name":1,
    "amenities"
}).pretty()


db.listingsAndReviews.find({
    "amenities":{
        "$in":["TV", "Cable TV"]
    }
},{
    "name":1,
    "amenities":1
}).pretty()


db.listingsAndReviews.find({
    "amenities": {
        "$all":["Internet", "Cable TV"]
    }
},{
    "name": 1,
    "amenities": 1
}).pretty()


## Find documents by their ID
use sample_mflix
db.movies.find({
    "_id": ObjectId("573a1390f29313caabcd4135")
})


## Find by date
use sample_airbnb
db.listingsAndReviews.find({
    "first_review":{
        "$gte": ISODate("2018-01-01)
    }
},{
    "name":1,
    "first_review":1
})

## Search by string patterns and to ignore case
Find all listing that have the substring "Spacious" inside and ignore case

db.listingsAndReviews.find({
    "name":{
        "$regex":"Spacious",
        "$options":"i"
    }
},{
    "name":1
}).pretty()

## Find all listings which name includes the pattern "apartment for x" where  x is a number
db.listingsAndReviews.find({
    "name":{
        "$regex":"apartment for \[0-9]",
        "$options":"i"
    }
},{
    "name":1
}).pretty()

## Logical Operators

db.listingsAndReviews.find({
    "$or":[
        {
            "address.country":"Brazil"
        },
        {
            "address.country":"Canada",
            "beds":{
                "$gte":3
            }
        }
    ]
},{
    "address.country":1,
    "beds":1
})

## Show all the listings not from Brazil or Canada

```
db.listingsAndReviews.find({
    'address.country': {
        '$not': {
            '$in':['Brazil', 'Canada']
        }
    }
},{
    'name':1,
    'address.country':1
})


db.animals.insert({
    "name":"Fluffy",
    "age":3,
    "breed":"Golden Retriever",
    "species":"Dog"
})

use fake_s
db.animals.insertMany([
    {
        'name':'Muffin',
        'age':10,
        'breed':'Orange Tabby',
        'species':'Cat'
    },
    {
        'name':'Carrots',
        'age': 2.5,
        'breed':'Bunny',
        'species':'Bunny'
    }
])

db.students.insertMany([
    {
        "name":"Jane Doe",
        "age": 13,
        "subjects": ["Defense Against the Dark Arts", "Charms", "History of Magic"],
        "date_enrolled": ISODate('2016-05-13')
    },
    {
        "name":"James Verses",
        "age": 14,
        "subjects": ["Transfiguration", "Alchemy"],
        "date_enrolled": ISODate('2015-06-15')
    },
    {
        "name":"Jonathan Goh",
        "age": 12,
        "subjects": ["Divination", "Study of Ancient Runes"],
        "date_enrolled": ISODate('2017-04-16')
    }
])


## Update a document: PATCH

<!-- only updates one document/or the first doc even if there are multiple docs that meets the criteria -->
db.animals.update({
    "_id":ObjectId("60a4c23e882d1b554ea926e1")
},{
    "$set":{
        "age":4
    }
})

## The PUT method

db.animals.update({
    "_id":ObjectId("60a4c3dd882d1b554ea926e3")
},{
    "name":"Carrots",
    "age":2.5,
    "breed":"Norwegian Forest Cat",
    "species":"Cat"
})

db.animals.updateMany({
    "species":"Cat"
},{
    "$inc":{
        "age":1
    }
})

#### CLASS HANDS-ON ####

// Q1: Increase the age of all students by 1
db.students.updateMany({},{
    "$inc":{
        "age":1
    }
})

// Q2: Change the date enrolled of Jonathan Goh to 2018 13th May
db.students.update({
    "_id": ObjectId("60a4c52b882d1b554ea926e6")
},{
    "$set":{
        "date_enrolled": ISODate("2018-05-13")
    }
})

// Q3: Change the age of James Verses to 13
db.students.update({
    "_id":ObjectId("60a4c52b882d1b554ea926e5")
},{
    "$set":{
        "age": 13
    }
})

// Q4: Change the student with the name of "Jane Doe" to "Jane Doe Jr" and her age to 11
db.students.update({
    "_id":ObjectId("60a4c52b882d1b554ea926e4")
},{
    "name":"Jane Doe Jr",
    "age": 11,
    "subjects": ["Defense Against the Dark Arts", "Charms", "History of Magic"],
    "date_enrolled": ISODate('2016-05-13')
})

## Delete documents

db.students.remove({
    "_id":ObjectId("60a4c52b882d1b554ea926e5")
})


## Embedded documents

db.animals.insertMany([
    {
        'name':'Snoopy',
        'age':2,
        'breed':'Beagle',
        'species':'Dog',
        'checkups':[]
    },
    {
        'name':'Garfield',
        'age':7,
        'breed':'Orange Tabby',
        'species':'Cat',
        'checkups': [
            {
                "_id":ObjectId(),
                "name":"Dr. Chua",
                "diagnosis":"Heartworms",
                "treatment":"Steriods"
            }
        ]
    }
])

## Adding a new sub-document

- use $push to add new element to an array of sub-documents
- always need to find the parent document first
- criteria will be the parent

db.animals.updateOne({
    '_id':ObjectId('60a5c97be153b81b68fd8afc')
},{
    '$push': {
        'checkups':{
            '_id': ObjectId(),
            'name': 'Dr Tan',
            'diagnosis':'Diabetes',
            'treatment':'Medication'
        }
    }
})

## Updating a sub document
1. We must select the parent document
2. Then select the sub-document


// $set will from the p.o.v from main document
// $ - refers to whichever element matches ($elemMatch)
```
/* Find the document where it has inside the checkups array, an embedded
document with the specified ID */

db.animals.update({
    'checkups': {
        '$elemMatch': {
            '_id': ObjectId('60a5c97be153b81b68fd8afb')
        }
    }
}, {
    '$set':{
        'checkups.$.name':'Dr Su',
        'checkups.$.diagnosis':'Diaherra',
        'checkups.$.date':ISODate()
    }
})