var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/homepage', (req, res, next) => {
  res.render('homepage', { 
    title: 'Simcoe Muskoka Workforce Development Board',
    message: 'Simcoe Muskoka Workforce Development Board. On this page you will be able to choose from either Employer, Job Seeker or to just Browse. After you choose which option is right for you, specific instructions for what is next will appear on the next page. Thank you for visiting the Simcoe Muskoka Workforce Development Board.'
   });
});

/* GET jobSeeker page. */
router.get('/jobSeekers', (req, res, next) => {
  res.render('jobSeekers', { 
    title: 'Job Seeker',
    message: 'Job Seeker Area.',
   });
});

/* GET employer page. */
router.get('/employers', (req, res, next) => {
  res.render('employers', { 
    title: 'Employer',
    message: 'Welcome to the Employer Area. Here you will be able to view all employee profile pages of companies that are looking to hire job seekers.'
   });
});

/* GET employee profile page. */
router.get('/employeeProfile', (req, res, next) => {
  res.render('employeeProfile', { 
    title: 'Employee Profile',
    message: 'Welcome to your Employee Profile. Here you will be able to create a profile page for your company to hire job seekers during your job fair.'
   });
});

/* GET admin approval page. */
router.get('/adminApproval', (req, res, next) => {
  res.render('adminApproval', { 
    title: 'Admin Approval',
    message: 'Welcome to the Admin Employee Approval Page. Here you will be able to either approve or decline a new pending request for an employer trying to take part in the job fair.'
   });
});

/* GET employer list page. */
router.get('/employerList', (req, res, next) => {
  res.render('employerList', { 
    title: 'Employer List',
    message: 'Welcome to the Employer List. Here you will be able to see a list of employers who will be taking part in the job fair.'
   });
});

/* GET job list page. */
router.get('/jobList', (req, res, next) => {
  res.render('jobList', { 
    title: 'Job List',
    message: 'Welcome to the Job List. Here you will be able to see all of the jobs listed in the job fair.'
   });
});

/* GET analytics page. */
router.get('/analytics', (req, res, next) => {
  res.render('analytics', { 
    title: 'Analytics',
    message: 'Welcome to the Analytics Page. Here you will be able to see all of the analytics for the job fair.'
   });
});

module.exports = router;
