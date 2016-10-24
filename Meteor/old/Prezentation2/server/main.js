import { Meteor } from 'meteor/meteor';
import { Images } from '../imports/api/images.js';
Meteor.startup(() => {
Images.remove({});
Images.insert({id: 1,url: "https://s-media-cache-ak0.pinimg.com/564x/80/bc/1c/80bc1c14d8977121ee3dcfc69df06efa.jpg"});
Images.insert({id: 2,url: "http://fantasyinspiration.com/wp-content/uploads/2011/07/fantasy-landscape-scenery-12.jpg" });
Images.insert({id: 3,url: "http://static.boredpanda.com/blog/wp-content/uuuploads/landscape-photography/landscape-photography-32.jpg"});
Images.insert({id: 4,url: "http://fantasyinspiration.com/wp-content/uploads/2011/07/fantasy-landscape-scenery-5.jpg"});
Images.insert({id: 5,url: "http://thefabriclab.com/wp-content/uploads/2016/08/32-wonderful-places-and-landscapes-only-for-your-eyes-26.jpg"});
});
