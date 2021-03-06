'use strict';

var Blog = require('../app/dbmodel');

var blogs = [{
    "title": "A crazy thing",
    "date": "1/1/2005",
    "author": "Joe Duffy",
    "body": "Farm-to-table trust fund yr, poutine health goth williamsburg tote bag lumbersexual butcher twee. Hashtag godard kombucha mixtape schlitz four dollar toast, seitan authentic farm-to-table locavore cold-pressed migas man braid. Jean shorts hella cliche fashion axe. Try-hard austin af, biodiesel plaid flexitarian vape YOLO schlitz neutra post-ironic. Echo park freegan hammock, kogi humblebrag waistcoat viral franzen yuccie cray craft beer. Hoodie iceland yuccie truffaut, craft beer chicharrones stumptown gastropub. Sriracha godard helvetica viral, mustache tattooed vaporware gentrify hoodie ramps vinyl sustainable."
}, {
    "title": "Another crazy thing",
    "date": "1/1/2005",
    "author": "Sam Huffy",
    "body": "Pickled cardigan fixie umami copper mug. Scenester sustainable iceland offal venmo. Yr tbh sustainable master cleanse, cornhole aesthetic fap actually. Shoreditch lo-fi keffiyeh air plant, subway tile enamel pin actually tattooed shabby chic leggings cold-pressed austin street art. Pabst XOXO photo booth man bun. Literally mixtape vaporware celiac pickled williamsburg. Freegan cray chartreuse art party PBR&B sustainable, humblebrag mixtape four loko before they sold out woke YOLO hella master cleanse."
}, {
    "title": "I blew up the deathstar",
    "date": "1/1/2005",
    "author": "Pam Guffy",
    "body": "XOXO single-origin coffee ramps, four loko meditation blog four dollar toast authentic. Coloring book vice flannel, pok pok listicle ethical poutine iceland ugh food truck lomo swag microdosing stumptown. Godard viral four loko PBR&B coloring book. Bitters authentic beard, lyft photo booth tousled pork belly coloring book single-origin coffee. Fam mumblecore literally ennui banjo iPhone trust fund 90's hella, activated charcoal venmo tofu umami lo-fi yuccie. Vape hella lomo, ennui chartreuse prism succulents glossier VHS helvetica waistcoat man bun sriracha. La croix selvage ennui, austin mlkshk 8-bit messenger bag gentrify cred tbh meh twee raw denim copper mug deep v."
}, {
    "title": "I like ham",
    "date": "1/1/2005",
    "author": "Han Solo",
    "body": "Edison bulb organic pour-over four loko. Lyft chia pinterest, deep v narwhal live-edge tote bag. Literally chicharrones swag, normcore stumptown put a bird on it vegan biodiesel bicycle rights marfa blue bottle brooklyn meh sartorial. Leggings la croix kombucha cardigan, viral asymmetrical sustainable hexagon. Hell of polaroid unicorn single-origin coffee, taxidermy tofu hoodie fam man braid shoreditch seitan bushwick. Waistcoat wayfarers green juice, beard cronut freegan bicycle rights air plant iceland kale chips. Mixtape biodiesel occupy, jianbing cold-pressed art party pour-over forage lyft church-key viral cardigan."
}, {
    "title": "Toast is good",
    "date": "1/1/2005",
    "author": "Darth Vader",
    "body": "Knausgaard succulents pok pok hoodie, slow-carb fingerstache drinking vinegar food truck readymade. Franzen sartorial man braid hexagon. Occupy gochujang knausgaard, marfa readymade squid snackwave chia. Next level direct trade jean shorts vape, affogato organic brunch pork belly leggings vaporware mixtape try-hard typewriter put a bird on it. Food truck sustainable XOXO actually kitsch prism. Artisan ethical echo park, aesthetic swag forage edison bulb PBR&B kitsch master cleanse. Cray tilde microdosing literally salvia hot chicken."
}, {
    "title": "THESE  PRETZELS ARE MAKIN' ME THIRSTAY",
    "date": "1/1/2005",
    "author": "Luke Skywalker",
    "body": "Neutra skateboard polaroid fap lomo, banh mi direct trade mumblecore squid. Wayfarers poke vice jean shorts helvetica. Fixie heirloom +1, disrupt raclette tilde master cleanse forage XOXO. Af art party seitan selvage offal fixie fam twee selfies. Slow-carb pok pok sustainable lo-fi, godard wolf DIY williamsburg swag truffaut whatever. Tofu mlkshk vice ethical, whatever chicharrones skateboard helvetica lo-fi meggings plaid poutine. Cold-pressed retro seitan jianbing."
}, {
    "title": "whuuuuuuuttt!!",
    "date": "1/1/2005",
    "author": "Ben Kenobi",
    "body": "Hexagon master cleanse meh try-hard vice, activated charcoal la croix succulents kickstarter fashion axe. Air plant hoodie mumblecore, gluten-free wolf taxidermy vinyl yr intelligentsia deep v. Seitan selvage cardigan polaroid. Vegan artisan schlitz ethical. Banh mi tofu mlkshk, viral everyday carry gochujang hexagon normcore meggings kinfolk hell of readymade meditation fam. Af hexagon health goth, portland meh asymmetrical tofu. Four loko viral stumptown slow-carb, everyday carry sriracha biodiesel edison bulb chillwave hell of blue bottle."
}];

//creates the seed data for the blog but only if it doesnt exist
blogs.forEach(function(blog, index) {
    Blog.find(blog, function(err, blogs) {
            if (!err && !blogs.length) {
                Blog.create(blog, function(err) {
                    if (err) {
                        console.error(err.message);
                    } else {
                        console.log(blog.title + ' created!');
                    };
                });
            }
    });
});
