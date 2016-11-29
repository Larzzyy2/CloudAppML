FlowRouter.route('/', {
  action: function() {
      BlazeLayout.render('MainLayout', {userArea:'user', addPresentationArea:'addPresentation', dashboardArea:'dashboard'});
  },
});

FlowRouter.route('/presentations/:id',{
    action(params)
    {
        console.log("The ID of the presentation is: " + params.id);
        BlazeLayout.render('DetailLayout',{detail:'detailPresentation'});
    },
})

