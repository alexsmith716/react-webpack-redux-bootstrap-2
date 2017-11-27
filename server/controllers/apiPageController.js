
import pageSchema from '../models/pageSchema';

export function getPageData(req, res) {

  console.log('>>>>>> apiPageController > export function getPageData <<<<<<: ', req.body.pageName);

  pageSchema.findOne({ pageName: req.body.pageName}).exec((err, pageSchema) => {

    if (err) {

      res.status(500).send(err);

    }

    res.json({ pageSchema });

  });

}
