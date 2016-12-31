FlowRouter.route('/', {
  action: function() {
        Session.set('currentPresentationID', undefined);
      Session.set('currentQuestionID', undefined);
      BlazeLayout.render('MainLayout', {userArea:'user', addPresentationArea:'addPresentation', dashboardArea:'dashboard'});

  },
});

FlowRouter.route('/presentations/:presentationID',{
    action(params)
    {
        Session.set('currentQuestionID', undefined);
        Session.set('currentPresentationID',params.presentationID);     
        BlazeLayout.render('DetailLayout');

    },
});

FlowRouter.route('/presentations/:presentationID/question/:QuestionID',{
    action(params)
    {
        Session.set('currentQuestionID', params.QuestionID);
        
        //GENERATES EXCEPTION WHEN PAGE IS REFRESHED
        Session.set('currentPresentationID', params.presentationID);
        var type = Questions.findOne({
            _id: params.QuestionID
            }).Type;
        Session.set('currentQuestionType', type);
        //
        console.log("Question Type Session in routing: " + Session.get('currentQuestionType'));
        
        BlazeLayout.render('QuestionLayout');
    }
});

FlowRouter.route('/show/:presentationID',{
    action(params)
    {
        Session.set('currentPresentationID', params.presentationID);
        BlazeLayout.render('ShowPresentationTeacher');
    }
});

FlowRouter.route('/teacher', {
    action: function(params) {
        BlazeLayout.render('TeacherMain');
    }
})

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