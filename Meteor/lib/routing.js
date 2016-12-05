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

FlowRouter.route('/student', {
    action: function(params) {
        BlazeLayout.render('StudentLayout');
    }
});

//route voor studenten waar ze naartoe moeten worden geleid als ze acces code hebben ingetikt
FlowRouter.route('/student/:id',{
    action(params)
    {
        Session.set('currentPresentationID', params.id);
        BlazeLayout.render('AnswerStudentLayout');
    }
});