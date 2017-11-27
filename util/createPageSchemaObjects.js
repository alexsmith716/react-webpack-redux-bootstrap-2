
import pageSchema from '../server/models/pageSchema';

export default function () {
  
    pageSchema.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const homePage  = new pageSchema({
      pageName: 'homePage',
      text: 'homePage Page ++++++++++'
    });

    const aboutPage  = new pageSchema({
      pageName: 'aboutPage',
      text: 'aboutPage Page ++++++++++'
    });

    const contactPage  = new pageSchema({
      pageName: 'contactPage',
      text: 'contactPage Page ++++++++++'
    });

    const signupPage  = new pageSchema({
      pageName: 'signupPage',
      text: 'signupPage Page ++++++++++'
    });

    const loginPage  = new pageSchema({
      pageName: 'loginPage',
      text: 'loginPage Page ++++++++++'
    });

    pageSchema.create([homePage, aboutPage, contactPage, signupPage, loginPage], (error) => {
      if (!error) {
        console.log('>>>>>> setInitPageSchema > pageSchema.create !! <<<<<<<<<');
      }
    });


  });
}