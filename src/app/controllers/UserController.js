import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Invalid or insufficient data' });
    };
    const checkUserExists = await User.findOne({
      where: { email: req.body.email }
    })

    if (checkUserExists) {
      return res.status(401).json({ error: 'This email is already registered' });
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({ id, name, email });

  };
};

export default new UserController();