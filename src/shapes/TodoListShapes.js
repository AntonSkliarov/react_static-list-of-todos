import PropTypes from 'prop-types';
import { UserShape } from './UserShapes';

export const TodoListShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: UserShape,
}).isRequired;
