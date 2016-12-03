FlowRouter.route('/', {
  action: function() {
      BlazeLayout.render('MainLayout', {userArea:'user', addPresentationArea:'addPresentation', dashboardArea:'dashboard'});
  },
});

FlowRouter.route('/presentations/:id',{
    action(params)
    {
        Session.set('currentPresentationID',params.id);
        BlazeLayout.render('DetailLayout');
    },
});