FlowRouter.route('/', {
  action: function() {
      BlazeLayout.render('MainLayout', {userArea:'user', addPresentationArea:'addPresentation', dashboardArea:'dashboard'});
  },
});

FlowRouter.route('/presentations/:id',{
    action(params)
    {
        Session.set('currentPresentationID',params.id);
        BlazeLayout.render('DetailLayout',{detail:'detailPresentation'});
    },
});

FlowRouter.route('/presentations/:id/multiplechoice',{
    action(params)
    {
        Session.set('currentPresentationID',params.id);
        BlazeLayout.render('DetailLayout',{detail:'detailPresentation'});
         BlazeLayout.render('DetailQuestion',{questiondetail:'MultipleChoice'});
    },
});

FlowRouter.route('/presentations/:id/open',{
    action(params)
    {
        Session.set('currentPresentationID',params.id);
        BlazeLayout.render('DetailLayout',{detail:'detailPresentation'});
        BlazeLayout.render('DetailQuestion',{questiondetail:'Open'});
    },
});

