
Meteor.publish('posts', function(options) {
  return Posts.find({}, options);
  //return Posts.find({}, {sort: sort, limit: limit});
});

Meteor.publish('comments', function(postId) {
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId});
});