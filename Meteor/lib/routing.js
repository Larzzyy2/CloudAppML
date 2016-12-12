FlowRouter.route('/', {
  action: function() {
      BlazeLayout.render('MainLayout', {userArea:'user', addPresentationArea:'addPresentation', dashboardArea:'dashboard'});
      Session.set('currentPresentationID', undefined);
  },
});

FlowRouter.route('/presentations/:presentationID',{
    action(params)
    {
        Session.set('currentPresentationID',params.presentationID);
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
        Session.set('currentPresentationID', params.PresentationID);
        BlazeLayout.render('AnswerStudentLayout');
    }
});

FlowRouter.route('/presentations/:presentationID/question/:QuestionID',{
    action(params)
    {
        Session.set('currentQuestionID', params.QuestionID);
        BlazeLayout.render('QuestionLayout');
    }
})