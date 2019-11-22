import Note from '../models/Note';
import User from '../models/User';
import * as Yup from 'yup';

class NoteController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      content: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Insufficient or invalid data' });
    };

    req.body.user_id = req.userId;
    const note = await Note.create(req.body);

    return res.json(note);
  };
  
  async index(req, res) {

    const notes = await Note.findAll({
      where: { user_id : req.userId },
      include: [{
          model: User,
          as: 'Author',
          attributes: ['name', 'email']
        }]
    });

    res.json(notes);
  };
};

export default new NoteController();
