import { Mongo } from 'meteor/mongo';
demo = new Mongo.Collection('demo');

Template.demo.helpers({
    demo : [
    {url: "https://s-media-cache-ak0.pinimg.com/564x/80/bc/1c/80bc1c14d8977121ee3dcfc69df06efa.jpg"},
    {url: "http://fantasyinspiration.com/wp-content/uploads/2011/07/fantasy-landscape-scenery-12.jpg" },
    {url: "http://static.boredpanda.com/blog/wp-content/uuuploads/landscape-photography/landscape-photography-32.jpg"},
    {url: "http://fantasyinspiration.com/wp-content/uploads/2011/07/fantasy-landscape-scenery-5.jpg"},
    {url: "http://thefabriclab.com/wp-content/uploads/2016/08/32-wonderful-places-and-landscapes-only-for-your-eyes-26.jpg"}
    
]
})